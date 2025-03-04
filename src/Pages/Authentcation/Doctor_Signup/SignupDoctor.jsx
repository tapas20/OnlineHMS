import { useForm, Controller } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import styles for phone input

 function SignupDoctor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: { 'image/*': ['.jpeg', '.png', '.jpg'] },
    maxFiles: 1,
  });

  const onSubmit = (data) => {
    const formData = new FormData();

    // Append profile photo if exists
    if (acceptedFiles[0]) {
      formData.append('profilePhoto', acceptedFiles[0]);
    }

    // Append all form data
    for (const key in data) {
      formData.append(key, data[key]);
    }

    console.log('Form Data:', Object.fromEntries(formData));
    // Here you would typically send the data to your backend API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6">
      {/* Profile Photo Upload (Required) */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
        <div {...getRootProps({ className: 'cursor-pointer' })}>
          <input {...getInputProps({ required: true })} />
          {acceptedFiles[0] ? (
            <img
              src={URL.createObjectURL(acceptedFiles[0])}
              alt="Profile Preview"
              className="mx-auto h-32 w-32 rounded-full object-cover"
            />
          ) : (
            <div className="space-y-2">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm text-gray-600">
                Drag & drop profile photo, or click to select (Required)
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 1. Name (First Name and Last Name) */}
        <InputField
          label="First Name"
          name="firstName"
          register={register}
          required
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          register={register}
          required
          error={errors.lastName}
        />

        {/* 2. Gender */}
        <SelectField
          label="Gender"
          name="gender"
          options={['Male', 'Female', 'Other']}
          register={register}
          required
          error={errors.gender}
        />

        {/* 3. Address */}
        <InputField
          label="Address"
          name="address"
          register={register}
          required
          error={errors.address}
        />

        {/* 4. Designation */}
        <InputField
          label="Designation"
          name="designation"
          register={register}
          required
          error={errors.designation}
        />

        {/* 5. Contact No. */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <Controller
            name="contactNo"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                international
                defaultCountry="IN"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                style={{
                  '--react-international-phone-height': '2.5rem',
                  '--react-international-phone-border-radius': '0.5rem',
                }}
              />
            )}
          />
          {errors.contactNo && (
            <span className="text-red-500 text-sm">Contact number is required</span>
          )}
        </div>

        {/* 6. Email ID */}
        <InputField
          label="Email ID"
          name="email"
          type="email"
          register={register}
          required
          error={errors.email}
        />

        {/* 7. Hospital Address */}
        <InputField
          label="Hospital Address"
          name="hospitalAddress"
          register={register}
          required
          error={errors.hospitalAddress}
        />

        {/* 8. Appointment Duration */}
        <InputField
          label="Appointment Duration (minutes)"
          name="appointmentDuration"
          type="number"
          register={register}
          required
          error={errors.appointmentDuration}
        />

        {/* 9. Available Days */}
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-700">
            Available Days <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-1">
            {[
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ].map((day) => (
              <label key={day} className="flex items-center">
                <input
                  type="checkbox"
                  {...register('availableDays')}
                  value={day}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-sm">{day}</span>
              </label>
            ))}
          </div>
          {errors.availableDays && (
            <span className="text-red-500 text-sm">Select at least one day</span>
          )}
        </div>

        {/* 10. Consultation Fee */}
        <InputField
          label="Consultation Fee (₹)"
          name="consultationFee"
          type="number"
          register={register}
          required
          error={errors.consultationFee}
        />

        {/* 11. Rating */}
        <InputField
          label="Rating (1-5)"
          name="rating"
          type="number"
          register={register}
          required
          error={errors.rating}
          min={1}
          max={5}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Register
      </button>
    </form>
  );
}

// Reusable Input Component
function InputField({
  label,
  name,
  type = 'text',
  register,
  required,
  error,
  min,
  max,
}) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        {...register(name, { required, min, max })}
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        min={min}
        max={max}
      />
      {error && (
        <span className="text-red-500 text-sm">This field is required</span>
      )}
    </div>
  );
}

// Reusable Select Component
function SelectField({ label, name, options, register, required, error }) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        {...register(name, { required })}
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-red-500 text-sm">This field is required</span>
      )}
    </div>
  );
}

export default SignupDoctor;