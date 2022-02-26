
const Users = [
        {
            id: 0,
            fullName: "placeHolder",
            subjects: ["placeHolder", "placeHolder", "placeHolder", "placeHolder"],
            age: 0,
            degree:"placeHolder",
            swipedOn: {}

        },
        {
            id: 1,
            fullName: "Will Davis",
            subjects: ["MATHS 1002", "PRGM 1001", "PSYCH 1001", "ENGL 2013"],
            age: 19,
            degree:"Computer Science",
            profilePc: "https://i.ibb.co/QnpNLQT/2.png",
            swipedOn: {
                4:false,
                1:true
               }

        },

        {
            id: 2,
            fullName: "Jim Halpert",
            subjects: ["COMP 1102","PHYS 2901", "PSYCH 1001", "LIT 1402"],
            age: 19,
            degree:"Maths",
            profilePc: "https://i.ibb.co/QnpNLQT/2.png",
            swipedOn: {
                2:false,
                3:true
               }

        },

        {
            id: 3,
            fullName: "Cynthia Rose",
            subjects: ["MATHS 1002", "LIT 1402", "ARTS 3029", "PSYCH 1001"],
            age: 25,
            degree:"Art",
            profilePc: "https://i.ibb.co/jDRYdbm/3.png",
            swipedOn: {
                5:false,
                1:true
               }

        },
        {
            id: 4,
            fullName: "Abed Nadir",
            subjects: ["LIT 1402", "MATHS 1002", "PSYCH 1001", "ENTREP 3901"],
            age: 19,
            degree:"Maths",
            profilePc: "https://i.ibb.co/9r6gg1T/4.jpg",
            swipedOn: {
                2:false,
                4:true
               }

        },

        {
            id: 5,
            fullName: "Kallan Duong",
            subjects: ["LIT 1402", "PSYCH 1001", "ENTREP 3901", "ENGL 2013"],
            age: 21,
            degree:"Computer Science",
            profilePc: 'https://i.ibb.co/X3PsGqW/6.jpg',
            swipedOn: {
                4:false,
                1:true
               }

        },

        {
            id: 6,
            fullName: "Troy Barnes",
            subjects: ["ARTS 3029", "PRGM 1001", "PSYCH 1001", "MATHS 1002"],
            age: 20,
            degree:"English",
            profilePc: "https://i.ibb.co/X3PsGqW/6.jpg",
            swipedOn: {
                5:false,
                1:true
               }

        },

        {
            id: 7,
            fullName: "Sheldon Cooper",
            subjects: ["MATHS 1002", "PSYCH 1001", "LIT 1402", "DEN 2410"],
            age: 19,
            degree:"Physics",
            profilePc: "https://i.ibb.co/xCmKV7x/The-Inspiration-Deprivation-Pictured-Sheldon-Cooper-Jim-Parsons-The-concept-of-what-it-would-mean-fo.jpg",
            swipedOn: {
                4:false,
                3:true
               }

        },

        {
            id: 8,
            fullName: "Ryan Howard",
            subjects: ["ARTS 3029", "PHYS 2901", "DEN 2410", "MATHS 1002"],
            age: 22,
            degree:"Business",
            profilePc: "https://i.ibb.co/rf3GYhc/8.png",
            swipedOn: {
                3:false,
                4:true
               }

        },

        {
            id: 9,
            fullName: "Rebecca Kendrick",
            subjects: ["ARTS 3029", "PSYCH 1001", "LIT 1402", "ENGL 2013"],
            age: 24,
            degree:"Art",
            profilePc: "https://i.ibb.co/p6q3X4q/9.jpg",
            swipedOn: {
                2:false,
                1:true
               }

        },

        {
            id: 10,
            fullName: "Amy Fowler",
            subjects: ["COMP 1102", "PRGM 1001", "PSYCH 1001", "DEN 2410"],
            age: 23,
            degree:"Computer Science",
            profilePc: "https://i.ibb.co/r6Jvbdg/10.jpg",
            swipedOn: {
                3:false,
                4:true
               }

        },

        {
            id: 11,
            fullName: "Pam Beesly",
            subjects: ["MATHS 1002", "ARTS 3029", "DEN 2410", "ENTREP 3901"],
            age: 22,
            degree:"Art",
            profilePc: "https://i.ibb.co/DWVhCkP/THE-OFFICE-Pictured-Jenna-Fischer-as-Pam-Beesly-NBC-Photo-Mitchell-Haaseth.jpg",
            swipedOn: {
                5:false,
                4:true
               }

        },

        {
            id: 12,
            fullName: "Ben Platt",
            subjects: ["LIT 1402", "PHYS 2901", "PSYCH 1001", "MATHS 1002"],
            age: 18,
            degree:"Psychology",
            profilePc: "https://i.ibb.co/P9VcP8Q/12.jpg",
            swipedOn: {
                5:false,
                3:true
               }

        },

        {
            id: 13,
            fullName: "Annie Edison",
            subjects: ["ARTS 3029", "PSYCH 1001", "LIT 1402", "ENGL 2013"],
            age: 19,
            degree:"Art",
            profilePc: "https://i.ibb.co/7bSGjbv/COMMUNITY-Bondage-and-Beta-Male-Sexuality-Episode-507-Pictured-Alison-Brie-as-Annie-Photo-by-Jordin.jpg",
            swipedOn: {
                2:false,
                5:true
               }

        },

        {
            id: 14,
            fullName: "Ren You",
            subjects: ["COMP 1102","DEN 2410","ENTREP 3901","LIT 1402"],
            age: 19,
            degree:"Philosophy",
            profilePc: "https://i.ibb.co/6RGJ0fK/1644402664280.jpg",
            swipedOn: {
                1:false,
                5:true
               }

        },

        {
            id: 15,
            fullName: "Michael Scott",
            subjects: ["MATHS 1002", "LIT 1402", "PSYCH 1001", "ARTS 3029"],
            age: 19,
            degree:"Business",
            profilePc: "https://i.ibb.co/47QvLp1/15.jpg",
            swipedOn: {
                3:false,
                3:true
               }

        },
        
        {
            id: 16,
            fullName: "Donald Ambudkar",
            subjects: ["PHYS 2901", "PRGM 1001", "DEN 2410", "LIT 1402"],
            age: 31,
            degree:"English",
            profilePc: "https://i.ibb.co/fnKF2W2/16.jpg",
            swipedOn: {
                1:false,
                5:true
               }

        },

        {
            id: 17,
            fullName: "Leslie Winkle",
            subjects: ["MATHS 1002", "ENTREP 3901", "LIT 1402", "ENGL 2013"],
            age: 31,
            degree:"English",
            profilePc: "https://i.ibb.co/7bwx85Z/17.png",
            swipedOn: {
                1:false,
                2:true
               }

        },

        {
            id: 18,
            fullName: "Angela Martin",
            subjects: ["COMP 1102", "PHYS 2901", "DEN 2410", "ENTREP 3901"],
            age: 19,
            degree:"Spanish",
            profilePc: "https://i.ibb.co/StGmwdL/THE-OFFICE-Pictured-Angela-Kinsey-as-Angela-Martin-NBC-Photo-Mitchell-Haaseth.jpg",
            swipedOn: {
                4:false,
                1:true
               }

        },

        {
            id: 19,
            fullName: "Dhyan Darji",
            subjects: ["MATHS 1002", "PSYCH 1001", "ARTS 3029", "DEN 2410"],
            age: 19,
            degree:"Computer Science",
            profilePc: "https://i.ibb.co/gJG1tmB/IMG-0756.jpg",
            swipedOn: {
                2:false,
                4:true
               }

        },

        {
            id: 20,
            fullName: "Chloe Snow",
            subjects: ["ARTS 3029", "LIT 1402", "DEN 2410", "ENGL 2013"],
            age: 20,
            degree:"Art",
            profilePc:"https://i.ibb.co/Nr5JDsF/20.jpg",
            swipedOn: {
                3:false,
                5:true
               }

        },

        {
            id: 21,
            fullName: "Jeff Winger",
            subjects: ["COMP 1102","ENGL 2013","PSYCH 1001","PHYS 2901"],
            age: 21,
            degree:"Law",
            profilePc: "https://i.ibb.co/7YSxYNV/21.jpg",
            swipedOn: {
                1:false,
                2:true
               }

        },

        {
            id: 22,
            fullName: "Hattie Nguyen",
            subjects: ["LIT 1402", "DEN 2410", "ARTS 3029", "ENTREP 3901"],
            age: 20,
            degree:"Computer Science",
            profilePc: "https://i.ibb.co/JcCtZyF/received-213645534304838.jpg",
            swipedOn: {
                2:false,
                1:true
               }

        },

        {
            id: 23,
            fullName: "Britta Perry",
            subjects: ["DEN 2410", "PHYS 2901", "ENTREP 3901", "ENGL 2013"],
            age: 23,
            degree:"Law",
            profilePc: "https://i.ibb.co/RDHzJM3/COMMUNITY-Pilot-Pictured-Gillian-Jacobs-as-Britta-NBC-Photo-Paul-Drinkwater.jpg",
            swipedOn: {
                2:false,
                3:true
               }

        },

        {
            id: 24,
            fullName: "Irhas Gill",
            subjects: ["ARTS 3029", "PHYS 2901", "PSYCH 1001", "ENGL 2013"],
            age: 19,
            degree:"Computer Science",
            profilePc: "https://i.ibb.co/QnpNLQT/2.png",
            swipedOn: {
                2:false,
                4:true
               }

        },

        {
            id: 25,
            fullName: "Raj Koothrappali",
            subjects: ["COMP 1102", "PRGM 1001", "PHYS 2901", "LIT 1402"],
            age: 20,
            degree:"Computer Science",
            profilePc: "https://i.ibb.co/pzGWHHL/Rajesh-Koothrappali.jpg",
            swipedOn: {
                4:false,
                3:true
               }

        }

    ]

const Groups = [
        {
            id: 0,
            groupName: "Community",
            members: [ 4, 6, 13, 21, 23 ],
            profilePc: "https://i.ibb.co/Qb47Tny/782f3606-1ca0-4f9e-9024-57a27b636ae5.jpg",
            swipedOn: {
                1:true,
                5:true,
                3:true,
                8:true,
                15:true,
            }
        },
        {
            id: 1,
            groupName: "The Office",
            members: [ 2, 8, 11, 15, 18 ],
            profilePc:"https://i.ibb.co/RzP8dGh/pitch-perfect-review-image-1200x688.jpg",
            swipedOn: {
                2:true,
                6:true,
                4:true,
                9:true,
                11:true,
            }
        },
        {
            id: 2,
            groupName: "Big Bang Theory",
            members: [ 7, 10, 17, 25 ],
            profilePic:"https://i.ibb.co/Ldt4RCv/The-Big-Bang-Theory-cast.jpg",
            swipedOn: {
                7:true,
                19:true,
                20:true,
                25:true,
                13:true,
            }
        },
        {
            id: 3,
            groupName: "Pitch Perfect",
            members: [ 3, 9, 12, 16, 20 ],
            profilePic: "https://i.ibb.co/Dg2VG2L/the-office-nbc.png",
            swipedOn: {
                24:true,
                23:true,
                12:true,
                10:true,
                16:true,
            }
        },
        {
            id: 4,
            groupName: "Sudo Apt Get Coffee",
            members: [ 1, 5, 14, 19, 22, 24 ],
            profilePic: "",
            swipedOn: {
                14:true,
                0:true,
                18:true,
                21:true,
                22:true,
            }
        },
    ]

export default {Users, Groups};