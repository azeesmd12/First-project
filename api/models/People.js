/**
 * People.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {



  attributes: {
  

  },

  getCourse: async function(){
    console.log("@Model People @method getCourse :: input");
    let query = `SELECT * FROM public.course`;
    let result = await sails.sendNativeQuery(query);
    return result.rows
  },

  getAssessment : async function(input){
    console.log("@Model People @method getAssessment :: input",input);
    let query = `SELECT * from assessment
                 WHERE course_id = $1`;
    let result = await sails.sendNativeQuery(query,[input.course_id]);
    if(result.rowCount)
    {
      return result.rows; 
      
    }
    else{
      return {message:"No such course id available"};
    }
              
  },

  getCourses : async function(input){
    console.log("@Model People @method getCourses :: input",input);
    let query = `SELECT  uc.course_id,uc.course_name,la.grade,la.progress
                 from usercourse as uc
                 JOIN learner_activity as la ON(la.course_id = uc.course_id)
                 WHERE uc.id = $1`;   
                 
    let result = await sails.sendNativeQuery(query,[input.user_id]);
    if(result.rowCount)
      return result.rows;   
    else
      return {message: 'No such user id available'}            
  },

  getCourseById : async function(input){
    console.log("@Model People @method getCourseById :: input",input);
    let query = `SELECT uc.course_id,uc.course_name,la.grade,la.progress,a.title
                 FROM usercourse as uc
                 JOIN learner_activity as la ON(la.course_id = uc.course_id)
                 LEFT JOIN assessment as a ON(a.course_id = la.course_id)
                 WHERE uc.course_id = $1 AND uc.id = $2`;
    let result = await sails.sendNativeQuery(query,[input.course_id,input.user_id]);
    return result.rows;           


  }




};

