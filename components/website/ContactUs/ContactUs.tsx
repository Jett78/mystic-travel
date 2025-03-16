import React from "react";
import Banner from "@/components/ui/banner";
import ContactData from "./contact-data";
import ContactForm from "./contact-form";
type Props = {};

function ContactUs({}: Props) {
  return (
    <>
      <Banner
        title="Contact Us"
        className="md:text-[4vw] text-4xl"
        img="https://images.unsplash.com/photo-1485160497022-3e09382fb310?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ContactData />
      <ContactForm />

     
    </>
  );
}

export default ContactUs;
