import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'


@Component({
  selector: 'apps,app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testings';
   division=0;
   numbers=[0,1,2,3,4]
   record=[{para1:"NTSE Scholarship 2022: The NCERT conducts the National Talent Search Examination (NTSE) scholarship exam for Class 10 students to encourage higher studies in the field of Science and Social Science. Students who are interested in NTSE scholarship registration need to contact their respective school authorities. There are two stages in the examination process and candidates need to pass both the stages to be eligible for the scholarship program.",para2:"Brief Description : The NTSE exam is held in two stages; stage-I is conducted at the state level, while stage-II is held at a national level.\n Posted On : 14th, November 2022 || 07:40 PM \n Update On : 14th, November 2022 || 07:40 PM",para3:"Application fee\n\tGeneral/OBC/EWS: Rs. 650/- • SC, ST Candidates : Rs. 500/-",para4:"• Payment Mode: Pay the Exam Fee Through Credit Card, Debit Card, Net Banking Fee Mode.",para5:"Eligibility Criteria\n Passed 10+2 (Intermediate) Exam with 50% marks Recognized Board in India."},{para1:"Punjab Scholarship 2022: The Government of Punjab has devised several Punjab Scholarship schemes to provide financial support to meritorious students from the primary school level to the college level. The main objective behind these monetary funds is to increase enrollment rates and reduce dropout rates among students in the state. These Punjab Scholarship 2022 schemes are meant for brilliant students with limited means to pursue the education of their dreams to help them build bright careers for themselves.",para2:"Brief Description : The state government provides 10 different types of scholarships to poor and talented students.Students can choose the one that fits their requirements and apply for them accordingly. Let’s see the full list of scholarships.\n Posted On : 14th, November 2022 || 07:40 PM \n Update On : 14th, November 2022 || 07:40 PM",para3:"Application fee\n\tGeneral/OBC/EWS: Rs. 650/- • SC, ST Candidates : Rs. 500/-",para4:"• Payment Mode: Pay the Exam Fee Through Credit Card, Debit Card, Net Banking Fee Mode.",para5:"Eligibility Criteria\n Passed 10+2 (Intermediate) Exam with 50% marks Recognized Board in India."},{para1:"The UP Scholarship 2022-23 initiative by the Uttar Pradesh Government provides financial assistance to economically weaker students. UP Scholarship login 2022 is available for students who have filled the UP Scholarship form in the first stage for Pre-Matric and Post-Matric scholarships. UP Scholarship login acts as one of the main steps to commence the procedure of applying for scholarships, either fresh or renewal.",para2:"Brief Description : UP Scholarship portal login helps students in applying, renewing, and tracking their scholarship status.\n Posted On : 14th, November 2022 || 07:40 PM \n Update On : 14th, November 2022 || 07:40 PM",para3:"Application fee\n\tGeneral/OBC/EWS: Rs. 650/- • SC, ST Candidates : Rs. 500/-",para4:"• Payment Mode: Pay the Exam Fee Through Credit Card, Debit Card, Net Banking Fee Mode.",para5:"Eligibility Criteria\n Passed 10+2 (Intermediate) Exam with 50% marks Recognized Board in India."},{para1:"Bihar Scholarship opens a vast range of educational opportunities for the students who are permanent residents of the state. The Government of Bihar and other private organisations together offer a number of scholarships for meritorious and underprivileged students of the state. The key objective of each scholarship is to encourage and motivate deserving students to pursue further studies regardless of any financial constraints. Candidates from SC, ST, OBC and EBC categories are eligible to apply for the scholarship.",para2:"Brief Description : Bihar Scholarship portal login helps students in applying, renewing, and tracking their scholarship status.\n Posted On : 14th, November 2022 || 07:40 PM \n Update On : 14th, November 2022 || 07:40 PM",para3:"Application fee\n\tGeneral/OBC/EWS: Rs. 650/- • SC, ST Candidates : Rs. 500/-",para4:"• Payment Mode: Pay the Exam Fee Through Credit Card, Debit Card, Net Banking Fee Mode.",para5:"Eligibility Criteria\n Passed 10+2 (Intermediate) Exam with 50% marks Recognized Board in India."},{para1:"The Department of Science and Technology, Government of India, announces the INSPIRE Scholarship for Higher Education (SHE) every year. The inspire scholarship selects eligible candidates on merit-based selection. The main objective of the scholarship is to help students study basic science and make a career in Science and Research. Students meeting the inspire scholarship eligibility can apply for the scholarship.",para2:"Brief Description : NSPIRE is an innovative programme that helps individuals to learn basic and natural science. The scholarship will allow aspirants to  pursue science at UG or PG level.\n Posted On : 14th, November 2022 || 07:40 PM \n Update On : 14th, November 2022 || 07:40 PM",para3:"Application fee\n\tGeneral/OBC/EWS: Rs. 650/- • SC, ST Candidates : Rs. 500/-",para4:"• Payment Mode: Pay the Exam Fee Through Credit Card, Debit Card, Net Banking Fee Mode.",para5:"Eligibility Criteria\n Passed 10+2 (Intermediate) Exam with 50% marks Recognized Board in India."},{para1:"NMMS Scholarship: For most states, the NMMS Scholarship 2022 Examination notification has been released.Students who qualify for the NMMS Scholarship exam can apply for the scholarship 2022 Scheme via the MHRD’s official website.Candidates will be chosen for the scholarship opportunity based on their performance in the written exam. In addition,the State Government will administer the NMMS exam on various days in accordance with NCERT norms.",para2:"Brief Description : The NMMS 2022 scholarship scheme shall be monitored by the Department at regular intervals of time by the authorized stakeholders.\n Posted On : 14th, November 2022 || 07:40 PM \n Update On : 14th, November 2022 || 07:40 PM",para3:"Application fee\n\tGeneral/OBC/EWS: Rs. 650/- • SC, ST Candidates : Rs. 500/-",para4:"• Payment Mode: Pay the Exam Fee Through Credit Card, Debit Card, Net Banking Fee Mode.",para5:"Eligibility Criteria\n Passed 10+2 (Intermediate) Exam with 50% marks Recognized Board in India."},{para1:"BITS Pilani Scholarship 2022: BITSAT 2022 is a gateway for candidates to get admission into various institutes offering engineering, pharmacy and many other courses. As all students and their guardians do not possess the same financial capabilities, the central and state government provide scholarships to meritorious students.",para2:"Brief Description : BITS Pilani scholarships can be availed by meritorious students, provided they consistently maintain good standing in their academic performance and conduct.\n Posted On : 14th, November 2022 || 07:40 PM \n Update On : 14th, November 2022 || 07:40 PM",para3:"Application fee\n\tGeneral/OBC/EWS: Rs. 650/- • SC, ST Candidates : Rs. 500/-",para4:"• Payment Mode: Pay the Exam Fee Through Credit Card, Debit Card, Net Banking Fee Mode.",para5:"Eligibility Criteria\n Passed 10+2 (Intermediate) Exam with 50% marks Recognized Board in India."}]
   a=0;
   details=["NTSE Scholarship 2022","Punjab scholarship 2022","UP Scholarship Status 2022","Bihar Scholarship Status 2022","Inspire Scholarship 2022","NMMS Scholarship 2022","BITS Pilani Scholarship 2022"];
   next() { 
    if(this.a==14)this.a=7
    this.a+=1;
    
   }
   prev() { 
    if(this.a==0)this.a=7
    this.a-=1;

   }
   linkage(number=0){
    if(number==-1){
      this.division=0;
    }
    else if(this.details[this.a+number]=="Punjab scholarship 2022"){
      this.division=2;
    }
    else if(this.details[this.a+number]=="NTSE Scholarship 2022"){
      this.division=1;
    }
    else if(this.details[this.a+number]=="UP Scholarship Status 2022"){
      this.division=3;
    }
    
    else if(this.details[this.a+number]=="BITS Pilani Scholarship 2022"){
      this.division=7;
    }
    else if(this.details[this.a+number]=="NMMS Scholarship 2022"){
      this.division=6;
    }
    else if(this.details[this.a+number]=="Inspire Scholarship 2022"){
      this.division=5;
    }
    else if(this.details[this.a+number]=="Bihar Scholarship Status 2022"){
      this.division=4;
    }
   }
   
}

