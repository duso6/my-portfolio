import React, { useState } from 'react';

const Consultation = () => {
  const [status, setStatus] = useState(""); 

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.target;
    
    // Convert form data to simple JSON object for FormSubmit
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    
    setStatus("submitting");

    // --- SEND DATA TO FORMSUBMIT.CO (Unlimited) ---
    try {
      // REPLACE WITH YOUR REAL EMAIL ADDRESS
      // IMPORTANT: Remove the "quote marks" if you want, but keep it as a string.
      const YOUR_EMAIL = "dumebinwankwo87@gmail.com"; 

      const response = await fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); 
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  // --- STYLES (Kept exactly the same as your Dark Theme) ---
  const labelStyle = { 
    display: 'block', 
    marginBottom: '8px', 
    fontWeight: 'bold', 
    fontSize: '12px',
    letterSpacing: '1px',
    color: '#94a3b8' 
  };
  
  const inputStyle = { 
    width: '100%', 
    padding: '12px 16px', 
    borderRadius: '8px', 
    border: '1px solid #334155', 
    background: '#0f172a', 
    color: 'white',
    marginBottom: '20px',
    fontSize: '14px'
  };

  // --- SUCCESS MESSAGE ---
  if (status === "success") {
    return (
      <section id="consultation" style={{ padding: '80px 20px', background: '#020617', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', background: '#1e293b', padding: '40px', borderRadius: '16px' }}>
          <h2 style={{ fontSize: '28px', color: '#4ade80', marginBottom: '10px' }}>Request Received! 🚀</h2>
          <p style={{ color: '#cbd5e1' }}>I will review your bottleneck and send you a roadmap shortly.</p>
          <button 
            onClick={() => setStatus("")}
            style={{ marginTop: '20px', padding: '10px 24px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer' }}>
            Send Another
          </button>
        </div>
      </section>
    );
  }

  // --- THE FORM ---
  return (
    <section id="consultation" style={{ background: '#020617', padding: '80px 20px', minHeight: '600px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        
        {/* Header Text */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '10px' }}>
            What Challenge Are We Solving?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '16px' }}>
            Briefly explain your bottleneck, and I'll design your digital roadmap.
          </p>
        </div>

        {/* Form Card */}
        <div style={{ background: '#111827', padding: '40px', borderRadius: '24px', border: '1px solid #1f2937' }}>
          <form onSubmit={handleSubmit}>
            
            {/* Hidden Field: Helps prevent spam bots */}
            <input type="text" name="_honey" style={{display: 'none'}} />
            {/* Hidden Field: Disables Captcha (Optional, makes it smoother) */}
            <input type="hidden" name="_captcha" value="false" />

            {/* ROW 1: Name and Email */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={labelStyle}>YOUR NAME</label>
                <input type="text" name="name" required placeholder="John Doe" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>EMAIL ADDRESS</label>
                <input type="email" name="email" required placeholder="john@example.com" style={inputStyle} />
              </div>
            </div>

            {/* Service Domain */}
            <div>
              <label style={labelStyle}>SERVICE DOMAIN</label>
              <select name="service_domain" style={{...inputStyle, appearance: 'none', cursor: 'pointer'}}>
                <option value="AI Automation">AI Automation</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Consulting">Consulting</option>
              </select>
            </div>

            {/* The Problem */}
            <div>
              <label style={labelStyle}>THE PROBLEM</label>
              <textarea 
                name="message" 
                required 
                placeholder="Explain your bottleneck..."
                rows={4}
                style={{ ...inputStyle, resize: 'vertical' }}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={status === "submitting"}
              style={{ 
                width: '100%',
                padding: '16px', 
                background: status === "submitting" ? '#475569' : '#2563eb',
                color: 'white', 
                fontWeight: 'bold', 
                fontSize: '16px',
                border: 'none', 
                borderRadius: '8px', 
                cursor: status === "submitting" ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s'
              }}
            >
              {status === "submitting" ? "Sending..." : "Get My Roadmap ✈️"}
            </button>
            
            {status === "error" && (
              <p style={{ color: '#f87171', textAlign: 'center', marginTop: '15px' }}>
                Something went wrong.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Consultation;