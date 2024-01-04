const testURL = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?';
// page=1&count=5
interface IRequestData {
  page: number;
  count: number;
}
export const getUsers = async (requestData: IRequestData) => {
  const fullURL =
    testURL + 'page=' + requestData.page + '&count=' + requestData.count;

  console.log(' - fullURL -> ', fullURL);

  const res = await fetch(fullURL);
  const result = await res.json();

  console.log(' --- result -> ', result);
  return result.success ? result.users : 'error';
};
