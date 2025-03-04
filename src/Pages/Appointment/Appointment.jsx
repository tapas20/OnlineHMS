import React from 'react'

const Appointment = () => {
  return (
    <div class="appointment bg-[url('https://thumbs.dreamstime.com/b/doctors-group-medical-over-blue-clinic-background-88012369.jpg')] bg-cover bg-center bg-no-repeat w-full h-screen flex items-center justify-start">
    <div class="appointment0 mx-auto ml-36">
      <h2 class="text-green-800">Welcome to Hospital Management</h2>
      <h1 class="text-4xl font-bold">We Take care Our <br/>Patients Health</h1>
      <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est expedita <br/>sapiente laudantium molestias fugiat asperiores aperiam architecto facilis,<br/> vero placeat quia libero dolores maxime exercitationem laborum! <br/>Saepe magni nisi libero!</p>
      <div class="mt-6 space-x-4">
        <button class="h-10 px-4 bg-green-600 text-white font-bold rounded-md">Get Appointment details</button>
        <button class="h-10 px-4 bg-green-600 text-white font-bold rounded-md">Book Appointment</button>
      </div>
    </div>
  </div>
  
  )
}

export default Appointment
