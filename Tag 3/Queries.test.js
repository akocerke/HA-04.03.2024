import axios from 'axios';

jest.mock('axios');


test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};

  // or you could use the following depending on your use case:
    axios.get.mockResolvedValue(resp);


  return Users.all().then(data => expect(data).toEqual(users));
});