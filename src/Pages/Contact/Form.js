import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import FormIcon from "../../Assets/Svg/Form/FormIcon.svg";
import "./Form.css";

export default function FormWeb() {
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
      setNameError("Name must be at least 3 characters.");
    } else {
      setNameError("");
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value.trim())) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };
  const validatePhone = (value) => {
    if (value.trim().length < 11) {
      setPhoneError("Phone enter a valid Phone number.");
    } else {
      setPhoneError("");
    }
  };
  const validateSubject = (value) => {
    if (value.trim().length < 3) {
      setSubjectError("Subject must be at least 5 characters.");
    } else {
      setSubjectError("");
    }
  };

  const validateMessage = (value) => {
    if (value.trim().length < 3) {
      setMessageError("message must be at least 5 characters.");
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
      { field: "user_name", setError: setNameError, error: "Name is required." },
      { field: "user_email", setError: setEmailError, error: "Please enter a valid email address.", regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      { field: "user_phone", setError: setPhoneError, error: "Phone is required." },
      { field: "user_subject", setError: setSubjectError, error: "Subject is required." },
      { field: "user_message", setError: setMessageError, error: "Message is required." },
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

      const result = await emailjs.sendForm(
        "service_txje3pa", // Service ID
        "template_yw09isg", // Template ID
        form,
        "zdd815XBR2AMi8FAc" // Public Key (User ID)
      );

      console.log("EmailJS Result:", result.text);
      setIsSuccess(true);
      generateCaptcha();

      setCaptcha("");
      setUserCaptchaInput("");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
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
      alert(`You can only enter up to ${maxWords} words.`);
    }
  };

  return (
    <>
      <form ref={formRef} onSubmit={sendEmailAfterVerification}>
        <div className="ContactUsBig">
          <div className="FormWebContainer">
            <div className="FormWTC">
              <div className="FormWP1">
                <div className="FiledBoxContainer">
                  <InputFieldBox
                    InputType="input"
                    Type="text"
                    Name="Name"
                    name="user_name"
                    Required="(required)"
                    Placeholder="Name"
                    onBlur={(e) => validateName(e.target.value)}
                  />
                  {nameError && <div className="error-message FLeowB16pxFW7">{nameError}</div>}
                </div>
                {/*  */}

                {/*  */}
                <div className="FiledBoxContainer">
                  <InputFieldBox
                    InputType="input"
                    Type="text"
                    Name="Phone Number"
                    name="user_phone"
                    Required="(required)"
                    Placeholder="+20"
                    onBlur={(e) => validatePhone(e.target.value)}
                  />
                  {phoneError && <div className="error-message FLeowB16pxFW7">{phoneError}</div>}

                  <div className="FiledBoxContainer">
                    <InputFieldBox
                      InputType="textarea"
                      Type="text"
                      Name="Message"
                      name="user_message"
                      Required="(required)"
                      Placeholder="Your message"
                      onInput={(e) => enforceWordLimit(e, 1000)}
                      onBlur={(e) => validateMessage(e.target.value)}
                    />
                    {messageError && <div className="error-message_Last FLeowB16pxFW7">{messageError}</div>}
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
                    Name="Email"
                    name="user_email"
                    Required="(required)"
                    Placeholder="example@gmail.com"
                    onBlur={(e) => validateEmail(e.target.value)}
                  />
                  {emailError && <div className="error-message FLeowB16pxFW7">{emailError}</div>}
                </div>
                <div className="FiledBoxContainer">
                  <InputFieldBox
                    InputType="input"
                    Type="text"
                    Name="Subject"
                    name="user_subject"
                    Required="(required)"
                    Placeholder="Message subject"
                    onBlur={(e) => validateSubject(e.target.value)}
                  />
                  {subjectError && <div className="error-message FLeowB16pxFW7">{subjectError}</div>}
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

function InputFieldBox({ InputType, Type, Name, Required, Placeholder, name, onBlur }) {
  return (
    <>
      <div className="InputFieldBox">
        <div className="IFBT">
          <div className="IFBTN FLeowB24pxFW7">{Name}</div>
          <div className="IFBTR FLeowB16pxFW7">{Required}</div>
        </div>
        <div className="InputMob">
          <label className="InputLabelMob">
            <InputType type={Type} name={name} placeholder={Placeholder} className="IFBI FLeowB20pxFW7" onBlur={onBlur} />
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
