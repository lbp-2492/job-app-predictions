"use client";
import { useState } from 'react';

export default function Input() {
  const [CRselectedOption, CRsetSelectedOption] = useState<string>('');

  const CRhandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    CRsetSelectedOption(event.target.value);
  };

  const [SselectedOption, SsetSelectedOption] = useState<string>('');

  const ShandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    SsetSelectedOption(event.target.value);
  };

  return (
    <main className="input-page-bg">
      <div>
        <h1 className="heading">HIPPO TAKES YOUR INPUT</h1>
      </div>
      <div className="cont-input">
        <form action="/api/submit" method="post">

          <div className="form-bg">
            <div className="grid-container-input">

              <div className="grid-item-input">
                <div className="spacing">
                  <input type="text" name="name" placeholder="Job Title" required />
                  <br />
                </div>
              </div>

              <div className="grid-item-input">
                <div className="spacing">
                  <input type="text" name="location" placeholder="Location" required />
                  <br />
                </div>
              </div>

              <div className="grid-item-input">
                <div className="spacing">
                  <select className="h-11" name="option" value={CRselectedOption} onChange={CRhandleChange} required>
                    <option className="" value="" disabled>Company Ranking</option>
                    <option value="option1">Fortune 500 type shi</option>
                    <option value="option2">Startup</option>
                    <option value="option3">Mid tier type shi (places that aren't tech based)</option>
                    <option value="option3">Easy shi</option>
                  </select>
                  <br />
                </div>
              </div>

              <div className="grid-item-input">
                <div className="spacing">
                  <input type="number" name="rating" placeholder="Simplify Rating" required />
                  <br />
                </div>
              </div>

              <div className="grid-item-input">
                <div className="spacing">
                  <div className="spacing">
                    <input type="number" name="range" placeholder="Salary Range?" required />
                    <br />
                  </div>
                </div>
              </div>

              <div className="grid-item-input">
                <div className="spacing">
                  <select className="h-11 w-96" name="option" value={SselectedOption} onChange={ShandleChange} required>
                    <option value="" disabled>Status?</option>
                    <option value="option1">Accepted</option>
                    <option value="option2">Rejected</option>
                    <option value="option3">Call Back</option>
                    <option value="option4">Ghosted (more than a month)</option>
                    <option value="option4">Response</option>
                  </select>
                  <br />
                </div>
              </div>

              <div className="grid-item-input">
                <div className="spacing-radio">
                  <label className="label-top"> Submitted Cover Letter? </label>
                  <div className="radio-buttons">
                    <input className="" type="radio" name="response" value="yes" required></input>
                    <span className="radio-spacing">Yes</span>
                    <input className="" type="radio" name="response" value="no" required></input>
                    <span className="radio-spacing">No</span>
                  </div>
                  <br />
                </div>
              </div>

            </div>
            <button className="button-spacing" type="submit">ADD TO DATA</button>
            <button className="button-spacing" type="submit">PREDICT</button>
          </div>
        </form>
      </div>
    </main>
  );
}