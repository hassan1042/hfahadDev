import { useState } from "react";
import Avatars from "./Avatars";
import ContactForm from "./ContactForm";

const InteractiveForm = () => {
  const [avatarState, setAvatarState] = useState("neutral"); // Avatar expression state
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Function to handle input focus events
  const handleFocus = (state) => setAvatarState(state);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setLoading(true);
      try {
        const response = await fetch("https://formspree.io/f/xdkoqpwg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmissionMessage("message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          setSubmissionMessage("unable to send message. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        setSubmissionMessage("unable to send message. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setSubmissionMessage("please fill out all the fields");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-sm:py-2 max-sm:p-2 p-6 bg-gray-100 min-h-screen">
      {/* Avatar Section */}
      <Avatars avatarState={avatarState} />

      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md max-[350px]:p-2 p-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center">
          Contact Me
        </h2>
        <ContactForm
          formData={formData}
          handleFocus={handleFocus}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          loading={loading}
          submissionMessage={submissionMessage}
        />
      </div>
    </div>
  );
};

export default InteractiveForm;
