//Parent Class
class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }

    static generatePassword() {
        return Math.floor(Math.random() * 10000);
      }
  }
  
  //Inheited Class - Nurse
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    }
  
    get certifications(){
      return this._certifications;
    }
  
    addCertification(newCertification){
      this._certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);

  //Inheited Class - Doctor
  class Doctor extends HospitalEmployee {
    constructor(name, insurance){
    super(name);
    this._insurance = insurance;
    }
  }
  
  const doctorWho = new Doctor('Who', 'Cigna');
  doctorWho.takeVacationDays(5);
  console.log(doctorWho.remainingVacationDays);