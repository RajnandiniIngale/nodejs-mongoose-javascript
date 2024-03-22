const userInfo = require('../model/userInfo')

module.exports = {

    deleteUser: async (args) => {
        try {

            const { id } = args.id;

            const deletedUser = await userInfo.findOneAndDelete(
                { id }
            )

            console.log(deletedUser);

            return deletedUser;
        }
        catch (error) {
            throw error;
        }

    },


    updateUser: async (args) => {
        try {

            const { name, email } = args.user;


            const updatedUser = await userInfo.findOneAndUpdate(
                { id },
                { $set: { name, email } },
                { new: true }
            )

            console.log(updatedUser);

            return updatedUser;
        }
        catch (error) {
            throw error;
        }
    },




    createUser: async (args) => {
        try {

            const { name, email } = args.user;

            const userData = new userInfo(
                { name, email }
            )

            const newUser = await userData.save();

            return { ...newUser._doc, id: newUser.id }
        }
        catch (error) {
            throw error;
        }
    },


    users: async () => {

        const userFetched = await userInfo.find();

        console.log(userFetched);

        return userFetched.map((user) => {
            return {
                ...user._doc,
                id: user._id
            }
        })

    },


    user: async (args) => {
        try {

            const userFetched = await userInfo.findById(args.id);

            console.log(userFetched);

            return userFetched;

        }
        catch (error) {
            throw error;
        }
    }

}