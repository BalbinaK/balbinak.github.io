(function() {
  let container = document.querySelector("#skills__list");
  const skills = [
    { name: "HTML/CSS/RWD", level: "90%" },
    { name: "Git/GitHub", level: "90%" },
    { name: "JavaScript", level: "40%" },
    { name: "Firebase", level: "50%" },
    { name: "ReactJS", level: "80%" },
    { name: "React-Native", level: "80%" },
    { name: "Redux", level: "90%" },
    { name: "Scrum", level: "90%" },
    { name: "TypeScript", level: "70%" },
    { name: "Python", level: "20%" }
  ];

  renderSkillList(skills);

  function build(element) {
    return document.createElement(element);
  }

  function renderSkillListElement(item) {
    const skillElement = build("div");
    const skillElementTitle = build("h4");
    const skillLevelWrapper = build("div");
    const skillLevel = build("div");

    skillElement.classList.add("skill__list_element");

    skillElementTitle.classList.add("skill__list_element_title");
    skillElementTitle.innerText = item.name;

    skillLevelWrapper.classList.add("skill__level_wrapper");

    skillLevel.classList.add("skill__level");
    skillLevel.setAttribute("style", `width: ${item.level};`);

    skillElement.appendChild(skillElementTitle);
    skillLevelWrapper.appendChild(skillLevel);
    skillElement.appendChild(skillLevelWrapper);

    container.appendChild(skillElement);
  }

  function renderSkillList(skills) {
    skills.forEach(item => renderSkillListElement(item));
  }
})();
