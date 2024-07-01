require('../services/db.service');
const getUser = require('../services/user.service');





//user
describe(' update user  :', () => {
  test('id valid', () => {
      expect(getUser.updateUser("vv@gmail .com")).toEqual(("vv@gmail.com"));
  })})
 test(' missing id :.', () => {
      expect(() => getUser.getUser(id.size=0).toThrow('missing parameter'));
       })
  test('add customer. missing @.', () => {
      expect(() => getUser.deleteUser(0).not.toThrow())
   })
