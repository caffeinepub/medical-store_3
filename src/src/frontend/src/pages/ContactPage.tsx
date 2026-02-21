import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent!", {
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "123 Healthcare Plaza, Medical District",
      subvalue: "New York, NY 10001",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(555) 123-4567",
      subvalue: "Toll-free: 1-800-MEDICARE",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@medicareplus.com",
      subvalue: "support@medicareplus.com",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon-Sat: 8:00 AM - 8:00 PM",
      subvalue: "Sun: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="container py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions? We're here to help. Reach out to our team anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg mt-1">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="font-semibold">{info.value}</p>
                        {info.subvalue && (
                          <p className="text-sm text-muted-foreground">
                            {info.subvalue}
                          </p>
                        )}
                      </div>
                    </div>
                    {index < contactInfo.length - 1 && <Separator />}
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Emergency Notice */}
          <Card className="bg-destructive/10 border-destructive/20">
            <CardContent className="p-6">
              <h3 className="font-serif font-semibold mb-2 text-destructive">
                Medical Emergency?
              </h3>
              <p className="text-sm text-muted-foreground">
                For medical emergencies, please call 911 or visit your nearest emergency room immediately.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Send us a Message</CardTitle>
              <p className="text-sm text-muted-foreground">
                Fill out the form below and we'll respond within 24 hours
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section */}
      <Card className="mt-12 overflow-hidden">
        <div className="aspect-[21/9] bg-muted relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-2">
              <MapPin className="h-12 w-12 text-primary mx-auto" />
              <p className="text-lg font-semibold">Visit Our Store</p>
              <p className="text-sm text-muted-foreground">
                123 Healthcare Plaza, Medical District
              </p>
              <p className="text-sm text-muted-foreground">New York, NY 10001</p>
            </div>
          </div>
        </div>
      </Card>

      {/* FAQ Teaser */}
      <div className="mt-12 text-center">
        <h2 className="font-serif text-3xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Looking for quick answers? Check out our FAQ section for information about prescriptions, delivery, payment methods, and more.
        </p>
        <Button variant="outline" size="lg">
          View FAQs
        </Button>
      </div>
    </div>
  );
}
