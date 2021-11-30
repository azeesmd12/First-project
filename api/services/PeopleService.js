const PeopleController = require("../controllers/PeopleController");
const People = require("../models/People");

module.exports = {

    getCourseDetails : async function()
    {
        console.log("@Service PeopleService @method getCourseDetails :: input");
        return await People.getCourse();
    },
    getAssessmentDetails: async function(input){
        console.log("@Service PeopleService @method getAssessmentDetails :: input",input.params);
        try {
            return await People.getAssessment(input.params);

        } catch (error) {

            console.log("@Service PeopleService @method getAssessmentDetails :: Error", error);
            return error;
        }
    },   
    getUserCourses: async function(input){
        console.log("@Service PeopleService @method getAssessmentDetails :: input",input.params);
        let userCourses = People.getCourses(input.params);
        return userCourses;

    },
    getCourseByCourseId: async function(input){
        console.log("@Service PeopleService @method getCourseByCourseId :: input",input);
        let courseByCourseId = await People.getCourseById(input);
        return courseByCourseId;
    }

       


}