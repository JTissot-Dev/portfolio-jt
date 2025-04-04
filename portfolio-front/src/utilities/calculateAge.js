function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  // Vérifie si l'anniversaire de cette année est passé
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

export default calculateAge;