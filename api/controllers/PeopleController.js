/**
 * PeopleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const PeopleService = require("../services/PeopleService");

module.exports = {


getCourseDetails : async function(req,res){
    console.log("@Controller PeopleController @method getCourseDetails"); 
    let courseDetails = await PeopleService.getCourseDetails();
    res.json(courseDetails);

},
getAssessmentDetails: async function(req,res){
    console.log("@Controller PeopleController @method getAssessmentDetails :: req",req.params);
    let allAssessment = await PeopleService.getAssessmentDetails(req);
    res.json(allAssessment);
},
getUserCourses: async function(req,res){
    console.log("@Controller PeopleController @method getUserCourses :: req",req.params);
    let userCourses = await PeopleService.getUserCourses(req);
    res.json(userCourses);

},
getCourseByCourseId : async function(req,res){
    console.log("@Controller PeopleController @method getCourseByCourseId :: req",req.params);
    let courseByCourseId = await PeopleService.getCourseByCourseId(req.params);
    res.json(courseByCourseId);
}
  

};

