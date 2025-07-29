import { IthakaForm } from "./interfaces/IthakaForm";

export const initialFormularioState: IthakaForm = {
  name: "",
  lastname: "",
  email: "",
  cellphone: "",
  ci: "",
  placeOfResidence: "Otro",
  placeOfContactIthaka: "Montevideo",
  relationToUCU: "",
  howFoundOut: "",
  hasTeam: false,
  team: [],
  previousExperience: "",
  problemToSolve: "",
  proposedSolution: "",
  diferentialFromCompetitors: "",
  businessModel: "",
  currentProjectPhase: "es solo una idea",
  wantsFromIthaka: {
    financing: false,
    validateIdea: false,
    businessPlan: false,
    training: false,
    mentorship: false,
  },
  availableTime: {
    morning: false,
    evening: false,
    lateEvening: false,
  },
};