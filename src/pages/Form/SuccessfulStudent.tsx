import Breadcrumb from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';

const Addteacher = () => {
  return (
    <>
      <Breadcrumb pageName="Add Successful Student" />

      <div className="">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Input Fields
              </h3>
            </div>

            <div>
              <form className=" md:grid grid-cols-2 gap-5.5 p-6.5" action="">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Student Name"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Add image
                  </label>
                  <input
                    type="file"
                    required
                    className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Technology
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Student's Technology "
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-3 block font-medium text-black dark:text-white">
                    Designation
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Student's designation"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-3 block font-medium text-black dark:text-white">
                    company name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Student's company"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-3 block font-medium text-black dark:text-white">
                    Phone No
                  </label>
                  <input
                    type="number"
                    required
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Student's Phone No"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-3 block font-medium text-black dark:text-white">
                  Session 
                  </label>
                  <input
                    type="number"
                    required
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Student's Session"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-3 block font-medium text-black dark:text-white">
                  Passing Year 
                  </label>
                  <input
                    type="number"
                    required
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Student's Passing Year "
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-3 block font-medium text-black dark:text-white">
                  CGPA 
                  </label>
                  <input
                    type="number"
                    required
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Student's CGPA"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="">
                  <label className="mb-3 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Student's Email"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <Link
                  to="#"
                  type="submit"
                  className=" col-span-2 w-full inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Submit
                </Link>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Addteacher;
