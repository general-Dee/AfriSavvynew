import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm } from 'react-hook-form';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { db } from '../firebase';

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onFormSubmit = async (data) => {
    try {
      const collectionRef = collection(db, 'comments');
      const payload = { name: data.name, email: data.email, subject: data.subject, message: data.message };
      await addDoc(collectionRef, payload);
      toast.success('Your message was successfully submitted');
      reset(); // Clear the form after submission
    } catch (error) {
      toast.error('There was an error submitting your message');
    }
  };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-20 md:px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase  tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl '>Signup Now</h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-lg md:text-4xl font-semibold text-center pt-20 mt-20 md:mt-10'>
          Are there available slot left in your city?{' '}
          <span className='decoration-[#F7AB0A]/50 underline'>Send us your info in the form to verify the validity of your location.</span>
        </h4>
      </div>

      <div>
        <div className='flex items-center space-x-5 justify-center mt-20'>
          <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
          <p className='text-lg md:text-xl'>+234 000 000 0000</p>
        </div>
        <div className='flex items-center space-x-5 justify-center mt-5'>
          <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
          <p className='text-lg md:text-xl'>edenmart@gmail.com</p>
        </div>
        {/* <div className='flex items-center space-x-5 justify-center mt-5'>
          <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
          <p className='text-lg md:text-xl'>Kaduna State.</p>
        </div> */}

        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto my-10'>
          <div className='flex space-x-2'>
            <div className='relative mb-4'>
              <label className='leading-7 text-sm text-gray-600'>Name
                <input
                  type='text'
                  {...register('name', { required: true })}
                  className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </label>
              {errors.name && <p className='text-red-600'>This field is required</p>}
            </div>

            <div className='relative mb-4'>
              <label className='leading-7 text-sm text-gray-600'>Email
                <input
                  type='email'
                  {...register('email', { required: true })}
                  className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </label>
              {errors.email && <p className='text-red-600'>This field is required</p>}
            </div>
          </div>

          <div className='relative mb-4'>
            <label className='leading-7 text-sm text-gray-600'>Phone Number
              <input
                type='text'
                {...register('subject', { required: true })}
                className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </label>
            {errors.subject && <p className='text-red-600'>This field is required</p>}
          </div>


          <div className='relative mb-4'>
            <label className='leading-7 text-sm text-gray-600'>State
              <input
                type='text'
                {...register('subject', { required: true })}
                className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </label>
            {errors.subject && <p className='text-red-600'>This field is required</p>}
          </div>


          <div className='relative mb-4'>
            <label className='leading-7 text-sm text-gray-600'>City
              <input
                type='text'
                {...register('subject', { required: true })}
                className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </label>
            {errors.subject && <p className='text-red-600'>This field is required</p>}
          </div>

          <button
            type='submit'
            className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
