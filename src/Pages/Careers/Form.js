import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
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
  const [addressError, setAddressError] = useState("");
  const [jobError, setJobError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [uploadedCV, setUploadedCV] = useState(null);

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

  const validateAddress = (value) => {
    if (value.trim().length < 3) {
      setAddressError("Address must be at least 5 characters.");
    } else {
      setAddressError("");
    }
  };

  const validateJob = (value) => {
    if (!value || value === "") {
      setJobError("Please select a job title.");
    } else {
      setJobError("");
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
      { field: "user_message", setError: setMessageError, error: "Message is required." },
      { field: "user_address", setError: setAddressError, error: "Address is required." },
      { field: "user_job", setError: setJobError, error: "Job is required." },
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

    // ✅ تحقق من CV
    if (!uploadedCV) {
      alert("Please upload your CV.");
      isValid = false;
    }

    return isValid;
  };

  const handleFileChangeCv = (e) => {
    const file = e.target.files[0];
    if (file && file.size < 2 * 1024 * 1024) {
      setUploadedCV(file);
    } else {
      alert("File is too large or not valid.");
    }
  };

  const sendEmailAfterVerification = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    if (!validateInputs(formData)) return;

    setIsCaptchaOpen(true);
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
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
              <td style="border: 1px solid #000; padding: 8px;"><strong>Address</strong></td>
              <td style="border: 1px solid #000; padding: 8px;">${formData.get("user_address")}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 8px;"><strong>Message</strong></td>
              <td style="border: 1px solid #000; padding: 8px;">${formData.get("user_message")}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 8px;"><strong>Job</strong></td>
              <td style="border: 1px solid #000; padding: 8px;">${formData.get("user_job")}</td>
            </tr>
            
          </table>
          <p>Best wishes,<br><strong style="color: #0000FF;">Bonyan Team</strong></p>
        </div>
      `,
        attachment: [],
      };

      if (uploadedCV) {
        const base64File = await convertFileToBase64(uploadedCV);
        emailData.attachment.push({
          content: base64File,
          name: uploadedCV.name,
        });
      }

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
      setUploadedCV(null);
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
      alert(`You can only enter up to ${maxWords} words.`);
    }
  };

  const jobOptions = ["Software Engineer", "Product Manager", "UI/UX Designer", "Data Analyst", "Marketing Specialist"];

  return (
    <>
      <form ref={formRef} onSubmit={sendEmailAfterVerification}>
        <div className="ContactUsBig">
          <div className="FormWebContainer">
            <div className="FormWTC">
              <div className="JobFormWP1">
                <div className="FiledBoxContainer">
                  <InputFieldBox
                    InputType="input"
                    Type="text"
                    Name="Full Name"
                    name="user_name"
                    Required="(required)"
                    Placeholder="Name"
                    onBlur={(e) => validateName(e.target.value)}
                  />
                  {nameError && <div className="error-message FLeowB16pxFW7">{nameError}</div>}
                </div>
                <div className="FiledBoxContainer">
                  <InputFieldBox
                    InputType="input"
                    Type="email"
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
                    Name="Phone Number"
                    name="user_phone"
                    Required="(required)"
                    Placeholder="+20"
                    Height=""
                    onBlur={(e) => validatePhone(e.target.value)}
                  />
                  {phoneError && <div className="error-message FLeowB16pxFW7">{phoneError}</div>}
                </div>
                <div className="FiledBoxContainer">
                  <InputFieldBox
                    InputType="input"
                    Type="text"
                    Name="Address"
                    name="user_address"
                    Required="(optional)"
                    Placeholder="Your current city of residence"
                    onBlur={(e) => validateAddress(e.target.value)}
                  />
                  {addressError && <div className="error-message FLeowB16pxFW7">{addressError}</div>}
                </div>
              </div>
              <div className="FormWP1">
                <InputFieldBoxUploadCV
                  InputType="input"
                  Type="text"
                  Name="Upload CV"
                  name="cv_file"
                  Required="(File upload, PDF/Word format)"
                  Placeholder="Select a file"
                  InputWithButton={true}
                  InputWidth="23vw"
                  InputWidthMob="45vw"
                  ButtonText="Choose File"
                  onFileChange={handleFileChangeCv}
                  fileName={uploadedCV?.name}
                />
                <div className="FiledBoxContainer">
                  <DropDownMenu
                    InputType="select"
                    Name="Job Title"
                    name="user_job"
                    Required="(required)"
                    Placeholder="Select your job title"
                    onBlur={(e) => validateJob(e.target.value)}
                    onChange={(e) => validateJob(e.target.value)}
                    options={jobOptions}
                    width={"37vw"}
                    widthMob={"85vw"}
                  />
                  {jobError && <div className="error-message FLeowB16pxFW7">{jobError}</div>}
                </div>
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
                    height="10vw"
                    minWidth="34.5vw"
                    width="34.5vw"
                    maxWidth="34.5vw"
                    minWidthMob="80vw"
                    widthMob="80vw"
                    maxWidthMob="80vw"
                  />
                  {messageError && <div className="error-message FLeowB16pxFW7">{messageError}</div>}
                </div>
              </div>
            </div>
            <div className="FormWSubmit">
              <button className="FromWsubmitB FLeowB16pxFW7" type="submit">
                Send <img src={FormIcon} alt="" />
              </button>
            </div>
          </div>
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
        </div>
      </form>
    </>
  );
}

function InputFieldBox({ InputType, Type, Name, Required, Placeholder, name, onBlur, width, minWidth, maxWidth, widthMob, minWidthMob, maxWidthMob, height }) {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <div className="InputFieldBox">
        <div className="IFBT">
          <div className="IFBTN FLeowB24pxFW7">{Name}</div>
          <div className="IFBTR FLeowB16pxFW7">{Required}</div>
        </div>
        <div className="InputMob">
          <label className="InputLabelMob">
            <InputType
              type={Type}
              name={name}
              placeholder={Placeholder}
              className="IFBI FLeowB20pxFW7"
              onBlur={onBlur}
              style={{
                width: isMobile ? widthMob : width,
                minWidth: isMobile ? minWidthMob : minWidth,
                maxWidth: isMobile ? maxWidthMob : maxWidth,
                height: height,
              }}
            />
          </label>
        </div>
      </div>
    </>
  );
}

function DropDownMenu({
  InputType = "input",
  Type,
  Name,
  Required,
  Placeholder,
  name,
  onBlur,
  width,
  minWidth,
  maxWidth,
  widthMob,
  height,
  options = [],
  onChange,
}) {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="InputFieldBox">
      <div className="IFBT">
        <div className="IFBTN FLeowB24pxFW7">{Name}</div>
        <div className="IFBTR FLeowB16pxFW7">{Required}</div>
      </div>
      <div className="InputMob">
        <div className="InputLabelMob InputLabelMobSelect">
          <select
            name={name}
            className="IFBI FLeowB20pxFW7"
            onBlur={onBlur}
            onChange={onChange}
            style={{
              width: isMobile ? widthMob : width,
              minWidth,
              maxWidth,
              height,
            }}
            defaultValue=""
          >
            <option value="" disabled>
              {Placeholder}
            </option>
            {options.map((job, index) => (
              <option key={index} value={job}>
                {job}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
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
// For Cv
//
function InputFieldBoxUploadCV({
  InputType,
  InputWidth,
  InputWidthMob,
  TextAreaHeight,
  TextAreaHeightMob,
  InputWithButton,
  Type,
  Name,
  Required,
  Placeholder,
  name,
  ButtonText,
  onFileChange,
  fileName,
}) {
  const isMobile = window.innerWidth <= 768;
  const fileInputRef = useRef();

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="JobInputFieldBox">
      <div className="JobIFBT">
        <div className="IFBTN FLeowB24pxFW7">{Name}</div>
        <div className="IFBTR FLeowB16pxFW7">{Required}</div>
      </div>
      <div className="JobIFBContent">
        <InputType
          type={Type}
          name={name}
          placeholder={Placeholder}
          className="IFBI FLeowB20pxFW7"
          style={{ width: isMobile ? InputWidthMob : InputWidth, height: isMobile ? TextAreaHeightMob : TextAreaHeight }}
          value={fileName || "No file selected"}
          readOnly={InputWithButton}
        />
        {InputWithButton && (
          <>
            <button type="button" className="JobIFBButton FLeowB16pxFW7" onClick={handleButtonClick}>
              {ButtonText}
            </button>
            <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={onFileChange} accept=".pdf,.doc,.docx" />
          </>
        )}
      </div>
    </div>
  );
}
