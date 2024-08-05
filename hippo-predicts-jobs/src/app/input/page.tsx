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
        <h1>HIPPO TAKES YOUR INPUT</h1>
      </div>
      <div>
        <form action="/api/submit" method="post">
          <label>
            Job Title:
            <input type="text" name="name" required />
          </label>
          <br />
          <label>
            Location:
            <input type="text" name="location" required />
          </label>
          <br />
          <label>
            Company Ranking:
            <select name="option" value={CRselectedOption} onChange={CRhandleChange} required>
              <option value="" disabled>Select a ranking</option>
              <option value="option1">Fortune 500 type shi</option>
              <option value="option2">Startup</option>
              <option value="option3">Mid tier type shi (places that aren't tech based)</option>
              <option value="option3">Easy shi</option>
            </select>
          </label>
          <br />
          <label>
            Simplify Rating for Resume:
            <input type="number" name="rating" required />
          </label>
          <br />
          <label>
            Submitted Cover Letter?
            <label className="">
              <input type="radio" name="response" value="yes" required></input>
              <span className="">Yes</span>
              <input type="radio" name="response" value="no" required></input>
              <span className="">No</span>
            </label>
          </label>
          <br />
          <label>
            Salary Range?
            <input type="number" name="range" required />
          </label>
          <br />
          <label>
            Status?
            <select name="option" value={SselectedOption} onChange={ShandleChange} required>
              <option value="" disabled>Select a ranking</option>
              <option value="option1">Accepted</option>
              <option value="option2">Rejected</option>
              <option value="option3">Call Back</option>
              <option value="option4">Ghosted (more than a month)</option>
              <option value="option4">Response</option>
            </select>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}