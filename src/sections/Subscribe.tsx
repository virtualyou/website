import Button from "../components/Button";
import Modal from "../components/Modal.tsx";
import {useState} from "react";
import BusinessService from "../services/business.service.ts";

const Subscribe: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const obj = {
    "email": email
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowModal(true);
    BusinessService.subscribeMember(obj);
  };

  const modalClose = () => {
    setShowModal(false);
    setEmail('');
  }

  return (
      <section
          id="news"
          className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      >
        <h5 className="text-2xl leading-[68px] lg:max-w-[40%] font-palanquin font-bold">
          Sign Up for our Newsletter
        </h5>
        <form>
          <div
              className="lg:max-w-[100%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
            <input onChange={handleEmailChange} id="email" value={email} type="text" placeholder="you@yourdomain.com" className="input lg:max-w-[80%]"/>
            <div className="flex max-sm:justify-end items-center max-sm:w-full">
              <Button label="Sign Up" onClick={handleSubmit} fullWidth/>
            </div>
          </div>
        </form>
{/* Notification modal */
}
  <Modal isOpen={showModal} onClose={modalClose}/>
</section>
)
  ;
};

export default Subscribe;
