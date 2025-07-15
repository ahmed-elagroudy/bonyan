import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import FormIcon from "../../Assets/Svg/Form/FormIcon.svg";
import "./Form.css";

export default function FormWebAr() {
  const formRef = useRef();
  const [captcha, setCaptcha] = useState("");
  const [userCaptchaInput, setUserCaptchaInput] = useState("");
  const [isCaptchaOpen, setIsCaptchaOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateName = (value) => {
    if (value.trim().length < 3) {
      setNameError("يجب أن يتكون الاسم من 3 أحرف على الأقل.");
    } else {
      setNameError("");
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value.trim())) {
      setEmailError("يرجى إدخال عنوان بريد إلكتروني صالح.");
    } else {
      setEmailError("");
    }
  };
  const validatePhone = (value) => {
    if (value.trim().length < 11) {
      setPhoneError("الهاتف أدخل رقم هاتف صالحًا.");
    } else {
      setPhoneError("");
    }
  };
  const validateSubject = (value) => {
    if (value.trim().length < 3) {
      setSubjectError("يجب أن يتكون الموضوع من 5 أحرف على الأقل.");
    } else {
      setSubjectError("");
    }
  };

  const validateMessage = (value) => {
    if (value.trim().length < 3) {
      setMessageError("يجب أن تتكون الرسالة من 5 أحرف على الأقل.");
    } else {
      setMessageError("");
    }
  };
  //

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptcha(`${num1} + ${num2}`);
  };

  const validateInputs = (formData) => {
    let isValid = true;

    const requiredFields = [
      { field: "user_name", setError: setNameError, error: "الاسم مطلوب." },
      { field: "user_email", setError: setEmailError, error: "يرجى إدخال عنوان بريد إلكتروني صالح.", regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      { field: "user_phone", setError: setPhoneError, error: "الهاتف مطلوب." },
      { field: "user_subject", setError: setSubjectError, error: "الموضوع مطلوب." },
      { field: "user_message", setError: setMessageError, error: "الرسالة مطلوبة." },
    ];

    for (const { field, setError, error, regex } of requiredFields) {
      const value = formData.get(field)?.trim();
      if (!value || (regex && !regex.test(value))) {
        setError(error);
        isValid = false;
      } else {
        setError("");
      }
    }

    return isValid;
  };

  const sendEmailAfterVerification = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    if (!validateInputs(formData)) return;

    setIsCaptchaOpen(true);
  };

  const apiKey = process.env.REACT_APP_BREVO_API_KEY;

  const verifyCaptchaAndSendEmail = async () => {
    const captchaValues = captcha.split(" + ").map(Number);
    const correctCaptchaAnswer = captchaValues[0] + captchaValues[1];

    if (parseInt(userCaptchaInput) !== correctCaptchaAnswer) {
      alert("Captcha verification failed. Please try again.");
      return;
    }

    setIsLoading(true);

    try {
      const form = formRef.current;
      const formData = new FormData(form);
      const emailData = {
        sender: { name: formData.get("user_name"), email: "bonyan.group.dev@gmail.com" },
        to: [{ email: "ahmedelagrode7@gmail.com" }],
        subject: formData.get("user_name"),
        htmlContent: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #000;">
          <p>Hello <strong style="color: #0000FF;">Bonyan Team</strong>,</p>
          <p>You got a New Contact from <strong>${formData.get("user_name")}</strong></p>
          <table style="width: 50%; border-collapse: collapse; border: 1px solid #000;">
            <tr>
              <td style="border: 1px solid #000; padding: 8px;"><strong>Name</strong></td>
              <td style="border: 1px solid #000; padding: 8px;">${formData.get("user_name")}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 8px;"><strong>Email</strong></td>
              <td style="border: 1px solid #000; padding: 8px;">${formData.get("user_email")}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 8px;"><strong>Phone Number</strong></td>
              <td style="border: 1px solid #000; padding: 8px;">${formData.get("user_phone")}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 8px;"><strong>subject</strong></td>
              <td style="border: 1px solid #000; padding: 8px;">${formData.get("user_subject")}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 8px;"><strong>Message</strong></td>
              <td style="border: 1px solid #000; padding: 8px;">${formData.get("user_message")}</td>
            </tr>
            
          </table>
          <p>Best wishes,<br><strong style="color: #0000FF;">Bonyan Team</strong></p>
        </div>
      `,
      };

      const response = await axios.post("https://api.brevo.com/v3/smtp/email", emailData, {
        headers: {
          accept: "application/json",
          "api-key": apiKey,
          "content-type": "application/json",
        },
      });

      if (response.status === 201) {
        setIsSuccess(true);
        generateCaptcha();
      } else {
        throw new Error("Failed to send email.");
      }

      setCaptcha("");
      setUserCaptchaInput("");
      form.reset();
    } catch (error) {
      console.error("Brevo API Error:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Headers:", error.response.headers);
        console.log("Data:", error.response.data);
      } else if (error.request) {
        console.log("Request:", error.request);
      } else {
        console.log("Error Message:", error.message);
      }

      alert("Failed to send email. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const enforceWordLimit = (event, maxWords) => {
    const textarea = event.target;
    const words = textarea.value.trim().split(/\s+/);
    if (words.length > maxWords) {
      textarea.value = words.slice(0, maxWords).join(" ");
      alert(`يمكنك فقط إدخال ما يصل إلى ${maxWords} كلمة.`);
    }
  };

  return (
    <>
      <form ref={formRef} onSubmit={sendEmailAfterVerification}>
        <div className="ContactUsBig">
          <div className="FormWebContainer">
            <div className="FormWTC" dir="rtl">
              <div className="FormWP1">
                <div className="FiledBoxContainer">
                  <InputFieldBox
                    InputType="input"
                    Type="text"
                    Name="الأسم"
                    name="user_name"
                    Required="(مطلوب)"
                    Placeholder="الأسم"
                    onBlur={(e) => validateName(e.target.value)}
                  />
                  {nameError && (
                    <div className="error-message ar FLeowB16pxFW7" dir="rtl">
                      {nameError}
                    </div>
                  )}
                </div>
                {/*  */}

                {/*  */}
                <div className="FiledBoxContainer">
                  <InputFieldBox
                    InputType="input"
                    Type="text"
                    Name="الهاتف"
                    name="user_phone"
                    Required="(مطلوب)"
                    Placeholder="+20"
                    onBlur={(e) => validatePhone(e.target.value)}
                  />
                  {phoneError && <div className="error-message ar FLeowB16pxFW7">{phoneError}</div>}

                  <div className="FiledBoxContainer">
                    <InputFieldBox
                      InputType="textarea"
                      Type="text"
                      Name="رسالتك"
                      name="user_message"
                      Required="(مطلوب)"
                      Placeholder="رسالتك"
                      onInput={(e) => enforceWordLimit(e, 1000)}
                      onBlur={(e) => validateMessage(e.target.value)}
                      paddingTop={"2vw"}
                    />
                    {messageError && (
                      <div className="error-message_Last ar FLeowB16pxFW7" dir="rtl">
                        {messageError}
                      </div>
                    )}
                  </div>
                </div>
                {/*  */}
              </div>
              <div className="FormWP1">
                {/*  */}
                <div className="FiledBoxContainer">
                  <InputFieldBox
                    InputType="input"
                    Type="text"
                    Name="البريد الإلكترونى"
                    name="user_email"
                    Required="(مطلوب)"
                    Placeholder="example@gmail.com"
                    onBlur={(e) => validateEmail(e.target.value)}
                  />
                  {emailError && <div className="error-message ar FLeowB16pxFW7">{emailError}</div>}
                </div>
                <div className="FiledBoxContainer">
                  <InputFieldBox
                    InputType="input"
                    Type="text"
                    Name="الموضوع"
                    name="user_subject"
                    Required="(مطلوب)"
                    Placeholder="نص الموضوع"
                    onBlur={(e) => validateSubject(e.target.value)}
                  />
                  {subjectError && <div className="error-message ar FLeowB16pxFW7">{subjectError}</div>}
                </div>
                {/*  */}
              </div>
            </div>
            <div className="FormWSubmit">
              <button className="FromWsubmitB FLeowB16pxFW7" type="submit">
                Send <img src={FormIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
      </form>
      {isCaptchaOpen && (
        <CaptchaDeisgn
          captcha={captcha}
          isLoading={isLoading}
          isSuccess={isSuccess}
          userCaptchaInput={userCaptchaInput}
          setUserCaptchaInput={setUserCaptchaInput}
          verifyCaptchaAndSendEmail={verifyCaptchaAndSendEmail}
          setIsCaptchaOpen={setIsCaptchaOpen}
          generateCaptcha={generateCaptcha}
        />
      )}
    </>
  );
}

function InputFieldBox({ InputType, Type, Name, Required, Placeholder, name, onBlur, paddingTop }) {
  return (
    <>
      <div className="InputFieldBox" dir="rtl" style={{ paddingTop: paddingTop }}>
        <div className="IFBT ar">
          <div className="IFBTN ar FLeowB24pxFW7">{Name}</div>
          <div className="IFBTR ar FLeowB16pxFW7">{Required}</div>
        </div>
        <div className="InputMob">
          <label className="InputLabelMob">
            <InputType type={Type} name={name} placeholder={Placeholder} className="IFBI ar FLeowB20pxFW7" onBlur={onBlur} />
          </label>
        </div>
      </div>
    </>
  );
}

function CaptchaDeisgn({ captcha, isLoading, isSuccess, userCaptchaInput, setUserCaptchaInput, verifyCaptchaAndSendEmail, setIsCaptchaOpen, generateCaptcha }) {
  return (
    <>
      <div className="captchaModal">
        <div className="captchaModalContent">
          {isLoading ? (
            <div className="CPLoading FLeowB16pxFW7">Loading...</div>
          ) : isSuccess ? (
            <>
              <div className="CaptchaSubmit">
                <div className="CPMessage FLeowB16pxFW7">
                  Thanks<span className="SpanBigger">,</span> your email has been sent<span className="SpanBigger">,</span> and one of our team members will
                  contact you soon.
                </div>
                <button onClick={() => setIsCaptchaOpen(false)} className="CaptchaSubB FLeowB16pxFW7">
                  Close
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="CaptchaQAContainer">
                <div className="CaptchaQ">
                  <div className="CaptchaQP1 FLeowB24pxFW7">Human Verification</div>
                  <div className="CaptchaQP2 FLeowB16pxFW7">Please solve the math problem below to proceed: What is {captcha} ?</div>
                </div>
                <div className="CaptchaAA">
                  <input
                    type="text"
                    placeholder="_"
                    value={userCaptchaInput}
                    onChange={(e) => setUserCaptchaInput(e.target.value)}
                    required
                    className="CaptchaAnswerF FLeowB16pxFW7"
                  />
                  <div className="CaptchaBB">
                    <button
                      onClick={() => {
                        setIsCaptchaOpen(false);
                        setUserCaptchaInput("");
                        generateCaptcha();
                      }}
                      className="CaptchaC FLeowB16pxFW7"
                    >
                      Cancel
                    </button>
                    <button onClick={verifyCaptchaAndSendEmail} className="CaptchaV FLeowB16pxFW7">
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
