import { getUsers } from '../../../helpers/helpers';
import SubmitButton from './SubmitButton';
const testArr = ['first', 'second', 'third'];
const testArr1 = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg'];

export default function My2() {
  const formHandler = async (formData: FormData) => {
    'use server';
    const password = formData.get('password');
    const nickname = formData.get('nickname');
    console.log('nickname: ', nickname);
    console.log('password: ', password);
    const requestData = {
      page: 1,
      count: 2,
    };

    const externalData = await getUsers(requestData);
    console.log(' - externalData ---> ', externalData);
  };

  return (
    <>
      <div className="group">
        <h1>My page2 new</h1>
        <p className="p-2 bg-gray-300 group-hover:border group-hover:border-sky-300 group-hover:text-white hover:bg-sky-700">
          Text for My page2 new
        </p>
        <p className="p-2 bg-gray-300 hover:ring hover:ring-violet-300">
          Text for My page2 new 1
        </p>
        {/* --- */}
        <ul>
          {testArr.map(item => (
            <li
              className="w-20 pl-2 py-4 first:pt-1 last:pb-1 text-md font-medium text-slate-900 odd:bg-slate-600 even:bg-slate-300"
              key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <form
        action={formHandler}
        className="m-3 required:[&_input]:border-red-500">
        <input
          type="text"
          name="nickname"
          className="border bg-fuchsia-200 focus:bg-fuchsia-500 md:placeholder:text-red-500 sm:placeholder:text-green-500"
          placeholder="nick"
          required
        />
        <input
          type="email"
          name="email"
          className="m-4 px-3 py-2 bg-stone-400 border border-stone-600 rounded-lg shadow-lg focus:bg-sky-400  focus:border-sky-700"
        />
        <input
          type="password"
          name="password"
          className="m-4 border bg-sky-300 focus:bg-sky-700 border-gray-300 focus:border-blue-400"
          required
        />
        <SubmitButton />
      </form>

      <ul className="flex justify-around [&_li]:text-blue-600">
        {testArr1.map(item => (
          <li
            className=" border border-stone-300 py-1 px-4 [&:nth-child(3)]:underline"
            key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
