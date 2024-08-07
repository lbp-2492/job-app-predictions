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
                  <label> Job Title </label>
                  <br />
                  <input type="text" name="name" required />
                  <br />
                </div>
              </div>

              <div className="grid-item-input">
                <div className="spacing">
                  <label> Location </label>
                  <br />
                  <input type="text" name="location" required />
                  <br />
                </div>
              </div>

              <div className="grid-item-input">
                <div className="spacing">
                  <label> Company Ranking </label>
                  <br />
                  <select className="h-11" name="option" value={CRselectedOption} onChange={CRhandleChange} required>
                    <option className="" value="" disabled>Select a ranking</option>
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
                  <label> Simplify Rating for Resume </label>          
                  <br />
                  <input type="number" name="rating" required />
                  <br />
                </div>
              </div>

              <div className="grid-item-input">
                <div className="spacing">
                  <div className="spacing">
                    <label> Salary Range? </label> 
                    <br />
                    <input type="number" name="range" required />
                    <br />
                  </div>
                </div>
              </div>

              <div className="grid-item-input">
                <div className="spacing">
                  <label> Status? </label>
                  <br />
                  <select className="h-11 w-96" name="option" value={SselectedOption} onChange={ShandleChange} required>
                    <option value="" disabled>Select a ranking</option>
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
                <div className="spacing">
                  <label> Submitted Cover Letter? </label>
                  <br />
                  <label className="">
                  <input className="" type="radio" name="response" value="yes" required></input>
                  <span className="radio-spacing">Yes</span>
                  <input className="" type="radio" name="response" value="no" required></input>
                  <span className="radio-spacing">No</span>
                  </label>
                  <br />
                </div>
              </div>

            </div>
          </div>
          <button className="button-spacing" type="submit">ADD TO DATA</button>
          <button className="button-spacing" type="submit">PREDICT</button>
        </form>
      </div>
    </main>
  );
}