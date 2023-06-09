import React, { useState } from 'react';

const ResumeBuilder = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState([{ id: 1, company: '', year: '', designation: '' }]);
  const [experience, setExperience] = useState([{ id: 1, company: '', year: '', designation: '' }]);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  const addEducationField = () => {
    const newEducation = { id: education.length + 1, company: '', year: '', designation: '' };
    setEducation([...education, newEducation]);
  };

  const removeEducationField = (id) => {
    const updatedEducation = education.filter((edu) => edu.id !== id);
    setEducation(updatedEducation);
  };

  const addExperienceField = () => {
    const newExperience = { id: experience.length + 1, company: '', year: '', designation: '' };
    setExperience([...experience, newExperience]);
  };

  const removeExperienceField = (id) => {
    const updatedExperience = experience.filter((exp) => exp.id !== id);
    setExperience(updatedExperience);
  };

  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skill) => {
    const updatedSkills = skills.filter((s) => s !== skill);
    setSkills(updatedSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process and submit the resume data
    console.log('Resume Data:', {
      name,
      email,
      address,
      phone,
      education,
      experience,
      skills,
    });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="col-lg-6">
        <div className="text-center mb-4">
          <h1 className="mt-4">Resume Builder</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Education:</label>
            {education.map((edu) => (
              <div key={edu.id} className="form-row mb-2">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company/Institute"
                    value={edu.company}
                    onChange={(e) => {
                      const updatedEducation = education.map((item) =>
                        item.id === edu.id ? { ...item, company: e.target.value } : item
                      );
                      setEducation(updatedEducation);
                    }}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Year"
                    value={edu.year}
                    onChange={(e) => {
                      const updatedEducation = education.map((item) =>
                        item.id === edu.id ? { ...item, year: e.target.value } : item
                      );
                      setEducation(updatedEducation);
                    }}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Designation/Degree"
                    value={edu.designation}
                    onChange={(e) => {
                      const updatedEducation = education.map((item) =>
                        item.id === edu.id ? { ...item, designation: e.target.value } : item
                      );
                      setEducation(updatedEducation);
                    }}
                  />
                </div>
                <div className="col-auto">
                  {edu.id !== 1 && (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeEducationField(edu.id)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button type="button" className="btn btn-primary mt-2" onClick={addEducationField}>
              Add Education
            </button>
          </div>

          <div className="form-group">
            <label>Experience:</label>
            {experience.map((exp) => (
              <div key={exp.id} className="form-row mb-2">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company/Institute"
                    value={exp.company}
                    onChange={(e) => {
                      const updatedExperience = experience.map((item) =>
                        item.id === exp.id ? { ...item, company: e.target.value } : item
                      );
                      setExperience(updatedExperience);
                    }}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Year"
                    value={exp.year}
                    onChange={(e) => {
                      const updatedExperience = experience.map((item) =>
                        item.id === exp.id ? { ...item, year: e.target.value } : item
                      );
                      setExperience(updatedExperience);
                    }}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Designation"
                    value={exp.designation}
                    onChange={(e) => {
                      const updatedExperience = experience.map((item) =>
                        item.id === exp.id ? { ...item, designation: e.target.value } : item
                      );
                      setExperience(updatedExperience);
                    }}
                  />
                </div>
                <div className="col-auto">
                  {exp.id !== 1 && (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeExperienceField(exp.id)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button type="button" className="btn btn-primary mt-2" onClick={addExperienceField}>
              Add Experience
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="skills">Skills:</label>
            <div className="d-flex align-items-center">
              <input
                type="text"
                id="skills"
                className="form-control"
                placeholder="Enter a skill"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <button type="button" className="btn btn-primary ml-2" onClick={addSkill}>
                Add Skill
              </button>
            </div>
            <div className="mt-2">
              {skills.map((skill) => (
                <span key={skill} className="badge badge-primary mr-2">
                  {skill}
                  <button
                    type="button"
                    className="close ml-1"
                    onClick={() => removeSkill(skill)}
                    aria-label="Remove"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </span>
              ))}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResumeBuilder;
