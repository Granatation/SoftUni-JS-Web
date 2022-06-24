const User = require('../models/User');

exports.getOne = (userId) => User.findById(userId);

// exports.addPublication = async(userId, publicationId) => {
//     const user = await User.findById(userId);

//     user.myPublications.push(publicationId);

//     await user.save();

//     return user
// };

// exports.deletePublication = async(userId, publicationId) => {
//     const user = await User.findById(userId);

//     const index = user.myPublications.indexOf(publicationId);
//     user.myPublications.splice(index, 1);

//     await user.save();

//     return user
// };