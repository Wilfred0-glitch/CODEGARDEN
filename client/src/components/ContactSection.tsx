import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const handleMainContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (!formData.get('fullName') || !formData.get('email') || !formData.get('courseInterest')) {
      toast({
        variant: "destructive",
        title: "Required Fields Missing",
        description: "Please fill in all required fields."
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const contactData = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone') || '',
        childAge: formData.get('childAge') || '',
        courseInterest: formData.get('courseInterest'),
        message: formData.get('message') || '',
        newsletter: formData.get('newsletter') === 'on',
        type: 'contact'
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        const form = e.currentTarget;
        form.reset();
        toast({
          title: "Message Successfully Sent! 🚀",
          description: "We'll contact you soon to discuss your inquiry. Check your email for next steps!",
          variant: "default"
        });

        // Reset success state after 3 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: result.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error: any) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      toast({
        variant: "destructive",
        title: "Network Error",
        description: "Please check your connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="modern-form">
              <div className="text-center mb-4">
                <h2 className="mb-3">Get In Touch</h2>
                <p className="text-muted">Ready to start your child's coding journey? Contact us today!</p>
              </div>

              <form onSubmit={handleMainContact}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="fullName" className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      className="form-control form-control-modern" 
                      id="fullName" 
                      name="fullName" 
                      required 
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      className="form-control form-control-modern" 
                      id="email" 
                      name="email" 
                      required 
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-control form-control-modern" 
                      id="phone" 
                      name="phone" 
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="childAge" className="form-label">Child's Age</label>
                    <select className="form-control form-control-modern" id="childAge" name="childAge">
                      <option value="">Select Age Range</option>
                      <option value="6-9">6-9 years</option>
                      <option value="10-14">10-14 years</option>
                      <option value="15-19">15-19 years</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="courseInterest" className="form-label">Course Interest *</label>
                    <select className="form-control form-control-modern" id="courseInterest" name="courseInterest" required>
                      <option value="">Select a Course</option>
                      <option value="roblox">Roblox Game Development</option>
                      <option value="website">Website Design & Development</option>
                      <option value="python">Python Programming</option>
                      <option value="scratch">Scratch for Kids</option>
                      <option value="computer-literacy">Computer Literacy</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="app-development">App Development</option>
                      <option value="data-science">Data Science</option>
                      <option value="javascript">JavaScript Programming</option>
                      <option value="html-css">HTML/CSS Web Design</option>
                      <option value="unity">Unity Game Development</option>
                      <option value="react">React Web Development</option>
                      <option value="multiple">Multiple Courses</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">Additional Message</label>
                    <textarea 
                      className="form-control form-control-modern" 
                      id="message" 
                      name="message" 
                      rows={4} 
                      placeholder="Tell us more about your child's interests or any specific questions..."
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="newsletter" name="newsletter" />
                      <label className="form-check-label" htmlFor="newsletter">
                        Subscribe to our newsletter for coding tips and updates
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button 
                      type="submit" 
                      className={`btn btn-optimized ${
                        submitStatus === 'success' ? 'btn-success-optimized' : 
                        isSubmitting ? 'btn-loading-optimized' : 
                        'btn-primary-optimized'
                      } w-100`}
                      disabled={isSubmitting || submitStatus === 'success'}
                    >
                      <div className="btn-content">
                        {submitStatus === 'success' ? (
                          <>
                            <div className="success-icon">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <span className="btn-text">Message Successfully Sent!</span>
                            <div className="success-particles"></div>
                          </>
                        ) : isSubmitting ? (
                          <>
                            <div className="loading-spinner">
                              <div className="spinner-ring"></div>
                            </div>
                            <span className="btn-text">Sending Message...</span>
                            <div className="progress-bar">
                              <div className="progress-fill"></div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="send-icon">
                              <i className="fas fa-paper-plane"></i>
                            </div>
                            <span className="btn-text">Send Message</span>
                            <div className="btn-hover-effect"></div>
                          </>
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              </form>

              {/* Contact Information */}
              <div className="row mt-5 pt-4 border-top">
                <div className="col-md-4 text-center mb-3">
                  <div className="feature-icon mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="fas fa-phone"></i>
                  </div>
                  <h6>Phone</h6>
                  <p className="text-muted">+234 810 502 5758</p>
                </div>
                <div className="col-md-4 text-center mb-3">
                  <div className="feature-icon mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h6>Address</h6>
                  <p className="text-muted">Rivers State ICT Center, Air Force Road, PortHarcourt, Nigeria </p>
                </div>
                <div className="col-md-4 text-center mb-3">
                  <div className="feature-icon mx-auto mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h6>Email</h6>
                  <p className="text-muted">info.codegarden@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
