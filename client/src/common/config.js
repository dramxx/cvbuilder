export const API_ROUTES = {
  auth: {
    login: "http://localhost:3141/api/auth/login",
    register: "http://localhost:3141/api/auth/register",
  },
  cv: {
    newCv: "http://localhost:3141/api/cv/new-cv",
    getCv: "http://localhost:3141/api/cv/get-cv",
    allCvs: "http://localhost:3141/api/cv/all-cvs",
    updateCv: "http://localhost:3141/api/cv/update-cv",
    deleteCv: "http://localhost:3141/api/cv/delete-cv",
  },
};

export const ROUTES = {
  home: "/home",
  documents: "/documents",
  unauthorized: "/unauthorized",
};
