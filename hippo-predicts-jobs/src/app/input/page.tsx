"use client";
import { useState } from 'react';

export default function Input() {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
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
            <input type="email" name="email" required />
          </label>
          <br />
          <label>
            Company Ranking:
            <input type="email" name="email" required />
            Select an option:
            <select name="option" value={selectedOption} onChange={handleChange} required>
            <option value="" disabled>Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          </label>
          <br />
          <label>
            Simplify Rating for Resume:
            <input type="email" name="email" required />
          </label>
          <br />
          <label>
            Submitted Cover Letter?
            <input type="email" name="email" required />
          </label>
          <br />
          <label>
            Salary Range?
            <input type="email" name="email" required />
          </label>
          <br />
          <label>
            Status?
            <input type="email" name="email" required />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}