import { getUsers } from '../../../helpers/helpers';
import SubmitButton from './SubmitButton';

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
      <div>
        <h1>My page2</h1>
        <p className="p-2 bg-gray-300">Text for My page2</p>
      </div>

      <form action={formHandler}>
        <input type="text" name="nickname" />
        <input type="password" name="password" />
        <SubmitButton />
      </form>
    </>
  );
}
