const emptyValue = null;
const missingValue = undefined;
const technologies = ["React", "TypeScript", "Vite"];
console.log(`Null: ${emptyValue}, Undefined: ${missingValue}, Technologies: ${technologies.join(", ")}`);
function describeConsultant(consultant) {
    const specialisationText = consultant.specialisation
        ? `, specialising in ${consultant.specialisation}`
        : "";
    console.log(`${consultant.name} is a ${consultant.grade} consultant${specialisationText}.`);
}
const alice = {
    id: 1,
    name: "Alice",
    grade: "Senior",
    specialisation: "Technology Strategy",
};
const jordan = {
    id: 2,
    name: "Jordan",
    grade: "Analyst",
};
describeConsultant(alice);
describeConsultant(jordan);
const consultantResponse = {
    data: alice,
    success: true,
};
const numberResponse = {
    data: [10, 20, 30],
    success: true,
};
console.log("Consultant API response:", consultantResponse);
console.log("Number API response:", numberResponse);
// Exercise 4: Union Types
function formatInput(input) {
    if (typeof input === "string") {
        console.log("Received a string.");
    }
    else {
        console.log("Received a number.");
    }
    return `Formatted: ${input.toString()}`;
}
console.log(formatInput("abc"));
console.log(formatInput(123));
function getStatusColor(status) {
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
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Completed"] = 2] = "Completed";
})(Status || (Status = {}));
console.log(`Pending: ${Status.Pending}`);
console.log(`InProgress: ${Status.InProgress}`);
console.log(`Completed: ${Status.Completed}`);
function getStatusLabel(status) {
    return Status[status];
}
console.log(`Status label: ${getStatusLabel(Status.InProgress)}`);
function formatProjectSummary(project) {
    return `${project.name} (${project.status}) — led by ${project.lead.name}, team of ${project.teamSize}`;
}
const clientPortalProject = {
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
export {};
