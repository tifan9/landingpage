import React,{useState} from 'react';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { Button } from '../components/Button';
import Input from '../components/Input';


const Contact = () => {
  const [error, setError] = useState({});
  const [formData, setFormData]= useState({
    name:'',
    email:'',
    subject:'',
    message:''
  })
  // error 

  const handleChange = (e)=>{
    console.log(e);
    setFormData((prev)=>({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    console.log(formData);
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const formErrors={}
    // Form Validation
    if(!formData.name.trim()){
      formErrors.name="Name is Required"
    }
    if(!formData.email.includes("@")){
      formErrors.email="Valid Email is Required"
    }
    if(!formData.subject.trim()){
      formErrors.subject="Subject is Required"
    } 
    if(!formData.message.trim()){
      
      formErrors.message="Message is Required"
    }
    console.log("Error",formErrors);
    if(Object.keys(formErrors).length>0){
      setError(formErrors)
    }else{
      alert("Sent Successfully!")
      setFormData({
        name:'',
        email:'',
        subject:'',
        message:''
      })
    }
    
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src="https://cdn.vectorstock.com/i/500p/86/48/world-map-on-transparent-background-vector-44408648.jpg"
          alt="World map background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left Side - Contact Info */}
      <div className="z-10 space-y-10">
        <h2 className="text-primaryColor-50 font-semibold">Contact Us</h2>
        <h1 className="text-4xl font-bold">Say Hello</h1>

        <div className="flex items-center gap-4">
          <div className="text-primaryColor-50 p-3 border-2 border-dotted border-primaryColor-50 rounded-full">
            <MdLocationOn size={30} />
          </div>
          <div>
            <h3 className="font-semibold">Address</h3>
            <p>Location KG 9 Ave, Kigali</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-primaryColor-50 p-3 border-2 border-dotted border-primaryColor-50 rounded-full">
            <MdEmail size={30} />
          </div>
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600 underline">businesscafe@info.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-primaryColor-50 p-3 border-2 border-dotted border-primaryColor-50 rounded-full">
            <MdPhone size={30} />
          </div>
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p>+250788183828</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="z-10">
        <h2 className="text-primaryColor-50 font-semibold">Have Question ?</h2>
        <h1 className="text-4xl font-bold pb-6">Send a Message</h1>
        <form action="" onSubmit={handleSubmit} className="space-y-4">
          <Input
          
          value={formData.name}
          onChange={handleChange}
          placeholder={"Name"}
          name={"name"}
          variant={error.name ? "danger" : "default"}
        />
        {error.name && (
          <p className="text-sm text-red-600">{error.name}</p>
        )}
        <Input
          
          value={formData.email}
          onChange={handleChange}
          placeholder={"Email"}
          name={"email"}
          variant={error.email ? "danger" : "default"}
        />
        {error.email && (
          <p className="text-sm text-red-600">{error.email}</p>
        )}
        <Input
          
          value={formData.subject}
          onChange={handleChange}
          placeholder={"Subject"}
          name={"subject"}
          variant={error.subject ? "danger" : "default"}
        />
        {error.subject && (
          <p className="text-sm text-red-600">{error.subject}</p>
        )}
        <Input
        type="textarea"
          value={formData.message}
          onChange={handleChange}
          placeholder={"Message"}
          name={"message"}
          variant={error.message ? "danger" : "default"}
        />
        {error.message && (
          <p className="text-sm text-red-600">{error.message}</p>
        )}
          <Button type="submit" label="Send Message" className='bg-primaryColor-50 shadow-md hover:bg-primaryColor-50/80 transition' />
        </form>
      </div>
    </div>
  );
};

export default Contact;
