const getGender = () => {
  const genderScore = Math.random();
  return genderScore < 0.4 ? "female" : genderScore > 0.6 ? "male" : "";
};

export default getGender;
