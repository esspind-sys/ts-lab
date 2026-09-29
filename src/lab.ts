const emptyValue: null = null;
const missingValue: undefined = undefined;
const technologies: string[] = ["React", "TypeScript", "Vite"];

console.log(
  `Null: ${emptyValue}, Undefined: ${missingValue}, Technologies: ${technologies.join(", ")}`
);

// Exercise 2: Interfaces
interface Consultant {
  id: number;
  name: string;
  grade: "Analyst" | "Senior" | "Manager";
  specialisation?: string;
}

function describeConsultant(consultant: Consultant): void {
  const specialisationText = consultant.specialisation
    ? `, specialising in ${consultant.specialisation}`
    : "";

  console.log(
    `${consultant.name} is a ${consultant.grade} consultant${specialisationText}.`
  );
}

const alice: Consultant = {
  id: 1,
  name: "Alice",
  grade: "Senior",
  specialisation: "Technology Strategy",
};

const jordan: Consultant = {
  id: 2,
  name: "Jordan",
  grade: "Analyst",
};

describeConsultant(alice);
describeConsultant(jordan);

// Exercise 3: Generics
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const consultantResponse: ApiResponse<Consultant> = {
  data: alice,
  success: true,
};

const numberResponse: ApiResponse<number[]> = {
  data: [10, 20, 30],
  success: true,
};

console.log("Consultant API response:", consultantResponse);
console.log("Number API response:", numberResponse);

// Exercise 4: Union Types
function formatInput(input: string | number): string {
  if (typeof input === "string") {
    console.log("Received a string.");
  } else {
    console.log("Received a number.");
  }

  return `Formatted: ${input.toString()}`;
}

console.log(formatInput("abc"));
console.log(formatInput(123));

type ProjectStatus = "active" | "completed" | "on-hold";

function getStatusColor(status: ProjectStatus): string {
  if (status === "active") {
    return "green";
  }

  if (status === "completed") {
    return "blue";
  }

  return "orange";
}

console.log(`Active color: ${getStatusColor("active")}`);
console.log(`Completed color: ${getStatusColor("completed")}`);
console.log(`On-hold color: ${getStatusColor("on-hold")}`);

// Exercise 5: Enums
enum Status {
  Pending,
  InProgress,
  Completed,
}

console.log(`Pending: ${Status.Pending}`);
console.log(`InProgress: ${Status.InProgress}`);
console.log(`Completed: ${Status.Completed}`);

function getStatusLabel(status: Status): string {
  return Status[status];
}

console.log(`Status label: ${getStatusLabel(Status.InProgress)}`);

interface ProjectCardProps {
  name: string;
  status: ProjectStatus;
  lead: Consultant;
  teamSize: number;
  onSelect: () => void;
}

function formatProjectSummary(project: ProjectCardProps): string {
  return `${project.name} (${project.status}) — led by ${project.lead.name}, team of ${project.teamSize}`;
}

const clientPortalProject: ProjectCardProps = {
  name: "Client Portal Redesign",
  status: "active",
  lead: alice,
  teamSize: 4,
  onSelect: () => {
    console.log("Project selected.");
  },
};

console.log(formatProjectSummary(clientPortalProject));
clientPortalProject.onSelect();