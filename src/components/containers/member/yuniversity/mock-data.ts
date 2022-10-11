/* eslint-disable */
import { ICourse } from "@components/screens/member/yuniversity/yuniversity.screen";

const uri =
  "https://yulife-local.imgix.net/yuniversity/test-university.png?ixlib=js-3.2.1&s=5f0fe663c057b471627613b4258ddaba";
const courses: ICourse[] = [
  {
    id: "course_1",
    title: `#### Course 1: 
        
Introduction to group risk:\nThe why and the what`,
    modules: [
      {
        id: "course_1_module_1",
        tags: "30 min • 3 Chapters",
        title: "Module 1: Why group risk makes sense for your clients and your business",
        image: {
          id: "",
          uri,
        },
        status: {
          icon: {
            id: "",
            uri:
              "https://yulife-local.imgix.net/app-system/icons/default/green-check.svg?ixlib=js-3.2.1&h=64&w=64&s=9690bb99f090c5469e463d2df1118eed",
          },
          text: "Completed",
        },
      },
      {
        id: "course_1_module_2",
        tags: "30 min • 2 Chapters",
        title: "Module 2: Group risk 101 - the products and the market",
        image: {
          id: "",
          uri,
        },
        status: {
          icon: {
            id: "",
            uri:
              "https://yulife-local.imgix.net/app-system/icons/default/green-check.svg?ixlib=js-3.2.1&h=64&w=64&s=9690bb99f090c5469e463d2df1118eed",
          },
          text: "Completed",
        },
      },
      {
        id: "course_1_module_3",
        tags: "30 min • 3 Chapters",
        title: "Module 3: Group risk as an employee benefit",
        image: {
          id: "",
          uri,
        },
      },
    ],
  },
  {
    id: "course_2",
    title: `#### Course 2:

Introduction to group risk:\nThe why and the what`,
    modules: [
      {
        id: "course_2_module_1",
        tags: "30 min • 3 Chapters",
        title: "Module 1: Why group risk makes sense for your clients and your business",
        image: {
          id: "",
          uri,
        },
      },
      {
        id: "course_2_module_2",
        tags: "30 min • 2 Chapters",
        title: "Module 2: Group risk 101 - the products and the market",
        image: {
          id: "",
          uri,
        },
      },
      {
        id: "course_2_module_3",
        tags: "30 min • 3 Chapters",
        title: "Module 3: Group risk as an employee benefit",
        image: {
          id: "",
          uri,
        },
      },
    ],
  },
];

export const getYuniversityCategoryCourses = {
  headerImage: {
    id: "",
    uri:
      "https://yulife-local.imgix.net/yuniversity/reading-scene.svg?ixlib=js-3.2.1&h=447&w=1125&s=647c6216be78693dd78be1b32d7a3561",
  },
  category: "CPD Courses",
  categoryImage: {
    id: "",
    uri:
      "https://yulife-local.imgix.net/yuniversity/charterec-institute.png?ixlib=js-3.2.1&h=78&w=120&s=ea304e847e04219ff64b8b2061275c84",
  },
  headerColour: "#fff7f1",
  courses,
};

// course details
const mock_markdown = `In this module, we will be helping you get to grips with the value of group risk and why it is becoming increasingly important. We’ll also dive into how it can benefit your clients and your business, plus taking a look at wider trends in wellbeing and the workplace.\n\nThis Yuniversity module is accredited by The Chartered Insurance Institute (CII). By completing this module you can claim up to 0.5 CPD hours towards the CII member CPD scheme.

##### Learning objectives

By the end of this module, Yuniversity students will be able to:

* Describe the benefits of group risk products to employers and their employees 
* List ways that advisers can benefit from advising on group risk products 
* Summarise key trends relating to mental and physical wellbeing in the workplace​`;

const moduleNotes = {
  iconWidth: 16,
  iconHeight: 20,
  icon: {
    id: "",
    uri:
      "https://yulife-local.imgix.net/app-system/icons/default/module.svg?ixlib=js-3.2.1&h=40&w=32&s=b0827c4f3fc3a46ab7305a69f41da945",
  },
  title: "Module notes",
  description: "Find the supporting notes for this module here.",
  ctaLabel: "Download / View",
  ctaEnabled: true,
};

const moduleQuiz = {
  iconWidth: 22,
  iconHeight: 22,
  icon: {
    id: "",
    uri:
      "https://yulife-local.imgix.net/app-system/icons/default/yellow-check.svg?ixlib=js-3.2.1&h=64&w=64&s=7a2dabf3d73fe5fa6e636f75d2be58c1",
  },
  title: "Module quiz",
  description: "Take the quiz to see how much you have learned and earn 200 YuCoin.",
  ctaLabel: "Take the quiz",
  ctaEnabled: true,
};

const moduleCertificate = {
  iconWidth: 16,
  iconHeight: 20,
  icon: {
    id: "",
    uri:
      "https://yulife-local.imgix.net/app-system/icons/default/certificate.svg?ixlib=js-3.2.1&h=46&w=38&s=4df69765e6d78a85b70a74220227fa57",
  },
  title: "Certificate",
  description:
    "Once you have completed the full module and reviewed your progress you will be able to view and download your certificate.",
  ctaLabel: `View & Download`,
  ctaEnabled: false,
};

const mock_chapters = [
  {
    id: "chapter_1",
    image: {
      id: "",
      uri,
    },
    completed: true,
    tags: "10 min • Video",
    title: "Chapter 1: The employer perspective",
    status: {
      icon: {
        id: "",
        uri:
          "https://yulife-local.imgix.net/app-system/icons/default/green-check.svg?ixlib=js-3.2.1&h=64&w=64&s=9690bb99f090c5469e463d2df1118eed",
      },
      text: "Completed",
    },
  },
  {
    id: "chapter_2",
    image: {
      id: "",
      uri,
    },
    completed: true,
    tags: "10 min • Video",
    title: "Chapter 2: The employee perspective",
    status: {
      icon: {
        id: "",
        uri:
          "https://yulife-local.imgix.net/app-system/icons/default/green-check.svg?ixlib=js-3.2.1&h=64&w=64&s=9690bb99f090c5469e463d2df1118eed",
      },
      text: "Completed",
    },
  },
  {
    id: "chapter_3",
    image: {
      id: "",
      uri,
    },
    completed: false,
    tags: "10 min • Video",
    title: "Chapter 3: The adviser perspective",
    status: {
      icon: {
        id: "",
        uri:
          "https://yulife-local.imgix.net/app-system/icons/default/green-check.svg?ixlib=js-3.2.1&h=64&w=64&s=9690bb99f090c5469e463d2df1118eed",
      },
      text: "Completed",
    },
  },
];

export const getYuniversityCourseDetails = {
  image: {
    id: "",
    uri:
      "https://yulife-local.imgix.net/yuniversity/charterec-institute.png?ixlib=js-3.2.1&h=78&w=120&s=ea304e847e04219ff64b8b2061275c84",
  },
  title: "Why group risk makes sense for your clients and your business",
  tags: "CPD Course 1, Module 1 • 30 min",
  markdown: mock_markdown,
  chapters: mock_chapters,
  moduleNotes,
  moduleQuiz,
  moduleCertificate,
  completed: true,
};
