"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

import {
  areaOptions,
  budgetOptions,
  projectTypeOptions,
  spaceTypeOptions,
  styleOptions,
  timeOptions,
} from "@/features/consultation/data/options";
import { cn } from "@/shared/utils";

type FormData = {
  projectType: string;
  description: string;
  spaceType: string;
  area: string;
  budget: string;
  time: string;
  style: string;
  name: string;
  phone: string;
  email: string;
};

const initialData: FormData = {
  projectType: "",
  description: "",
  spaceType: "",
  area: "",
  budget: "",
  time: "",
  style: "",
  name: "",
  phone: "",
  email: "",
};

const steps = [
  { index: "01", label: "Your Project" },
  { index: "02", label: "Your Space" },
  { index: "03", label: "Your Style" },
  { index: "04", label: "Contact Details" },
] as const;

type FieldKey = keyof FormData;

function validateStep(step: number, data: FormData) {
  const errors: Partial<Record<FieldKey, string>> = {};

  if (step === 0) {
    if (!data.projectType) errors.projectType = "Please select a project type.";
  }

  if (step === 1) {
    if (!data.spaceType) errors.spaceType = "Please select a space type.";
    if (!data.area) errors.area = "Please select an approximate area.";
  }

  if (step === 2) {
    if (!data.budget) errors.budget = "Please select a budget range.";
    if (!data.style) errors.style = "Please select a style direction.";
  }

  if (step === 3) {
    if (!data.name.trim()) errors.name = "Please share your name.";
    if (!/^[+\d][\d\s-]{8,14}$/.test(data.phone.trim()))
      errors.phone = "Please enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
      errors.email = "Please enter a valid email address.";
  }

  return errors;
}

export function ConsultationForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: FieldKey, value: string) => {
    setData((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const handleNext = () => {
    const stepErrors = validateStep(step, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setStep((current) => current + 1);
  };

  const handleBack = () => setStep((current) => current - 1);

  const handleSubmit = () => {
    const stepErrors = validateStep(3, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setSubmitted(true);
  };

  const reset = () => {
    setData(initialData);
    setErrors({});
    setStep(0);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-6 py-16 text-center md:py-20">
        <span className="border-champagne/50 bg-champagne/10 text-champagne flex size-16 items-center justify-center rounded-full border">
          <CheckIcon />
        </span>
        <h3 className="text-ivory font-serif text-3xl md:text-4xl">
          Thank you, {data.name.split(" ")[0]}.
        </h3>
        <p className="text-ivory/60 max-w-md text-sm leading-7 font-light">
          Your consultation request has been received. Our team will reach out
          within one working day to schedule your first conversation.
        </p>
        <button
          type="button"
          onClick={reset}
          className="text-champagne hover:text-ivory mt-4 text-xs font-medium tracking-[0.2em] uppercase underline-offset-4 transition-colors hover:underline"
        >
          Begin another consultation
        </button>
      </div>
    );
  }

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div className="border-ivory/15 bg-charcoal/60 relative border p-7 backdrop-blur-sm md:p-12">
      <div className="border-ivory/10 flex flex-wrap items-center justify-between gap-4 border-b pb-6">
        <div className="flex items-center gap-6 md:gap-9">
          {steps.map((item, index) => (
            <div key={item.index} className="flex items-center gap-6 md:gap-9">
              <button
                type="button"
                onClick={() => index < step && setStep(index)}
                className={cn(
                  "flex items-center gap-2.5 text-left",
                  index < step && "cursor-pointer"
                )}
              >
                <span
                  className={cn(
                    "flex size-9 items-center justify-center rounded-full border font-serif text-sm transition-colors duration-300",
                    index === step
                      ? "border-champagne bg-champagne text-charcoal"
                      : index < step
                        ? "border-champagne/60 text-champagne"
                        : "border-ivory/20 text-ivory/40"
                  )}
                >
                  {index < step ? (
                    <CheckIcon className="size-3.5" />
                  ) : (
                    item.index
                  )}
                </span>
                <span
                  className={cn(
                    "hidden text-[0.7rem] font-medium tracking-[0.22em] uppercase md:block",
                    index === step ? "text-ivory" : "text-ivory/40"
                  )}
                >
                  {item.label}
                </span>
              </button>
              {index < steps.length - 1 && (
                <span
                  aria-hidden
                  className={cn(
                    "hidden h-px w-6 md:block",
                    index < step ? "bg-champagne/60" : "bg-ivory/15"
                  )}
                />
              )}
            </div>
          ))}
        </div>
        <span className="text-ivory/50 font-serif text-lg">
          <span className="text-champagne">
            {String(step + 1).padStart(2, "0")}
          </span>{" "}
          / {String(steps.length).padStart(2, "0")}
        </span>
      </div>

      <div className="bg-ivory/10 mt-4 h-px w-full">
        <div
          className="bg-champagne h-px transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-10" key={step}>
        <p className="eyebrow text-champagne">
          <span className="bg-champagne/60 h-px w-8" aria-hidden />
          {steps[step].index} — {steps[step].label}
        </p>

        {step === 0 && (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Field label="Project Type" error={errors.projectType}>
              <SelectField
                value={data.projectType}
                onChange={(value) => update("projectType", value)}
                placeholder="Select a project type"
                options={projectTypeOptions}
              />
            </Field>
            <Field label="Tell us about your project" className="md:col-span-2">
              <TextareaField
                value={data.description}
                onChange={(value) => update("description", value)}
                placeholder="A short note about what you have in mind…"
              />
            </Field>
          </div>
        )}

        {step === 1 && (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Field label="Space Type" error={errors.spaceType}>
              <SelectField
                value={data.spaceType}
                onChange={(value) => update("spaceType", value)}
                placeholder="Select a space type"
                options={spaceTypeOptions}
              />
            </Field>
            <Field label="Approximate Area" error={errors.area}>
              <SelectField
                value={data.area}
                onChange={(value) => update("area", value)}
                placeholder="Select approximate area"
                options={areaOptions}
              />
            </Field>
          </div>
        )}

        {step === 2 && (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Field label="Budget Range" error={errors.budget}>
              <SelectField
                value={data.budget}
                onChange={(value) => update("budget", value)}
                placeholder="Select a budget range"
                options={budgetOptions}
              />
            </Field>
            <Field label="Preferred Consultation Time">
              <SelectField
                value={data.time}
                onChange={(value) => update("time", value)}
                placeholder="Select a time"
                options={timeOptions}
              />
            </Field>
            <Field label="Style Direction" error={errors.style}>
              <SelectField
                value={data.style}
                onChange={(value) => update("style", value)}
                placeholder="Select a style direction"
                options={styleOptions}
              />
            </Field>
          </div>
        )}

        {step === 3 && (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Field label="Your Name" error={errors.name}>
              <TextField
                value={data.name}
                onChange={(value) => update("name", value)}
                placeholder="What should we call you?"
              />
            </Field>
            <Field label="Phone" error={errors.phone}>
              <TextField
                value={data.phone}
                onChange={(value) => update("phone", value)}
                placeholder="+91 00000 00000"
                inputMode="tel"
              />
            </Field>
            <Field label="Email" error={errors.email} className="md:col-span-2">
              <TextField
                value={data.email}
                onChange={(value) => update("email", value)}
                placeholder="you@example.com"
                inputMode="email"
              />
            </Field>
          </div>
        )}
      </div>

      <div className="mt-12 flex items-center justify-between">
        <button
          type="button"
          onClick={handleBack}
          className={cn(
            "flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase transition-colors",
            step === 0
              ? "text-ivory/25 pointer-events-none"
              : "text-ivory/60 hover:text-champagne"
          )}
          disabled={step === 0}
        >
          <ArrowLeft className="size-4" />
          Back
        </button>

        {step < steps.length - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            className="group bg-champagne text-charcoal hover:bg-bronze hover:text-ivory inline-flex h-12 items-center gap-3 px-8 text-sm font-medium tracking-[0.1em] uppercase transition-colors duration-300"
          >
            Continue
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="group bg-champagne text-charcoal hover:bg-bronze hover:text-ivory inline-flex h-12 items-center gap-3 px-8 text-sm font-medium tracking-[0.1em] uppercase transition-colors duration-300"
          >
            Book a Consultation
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        )}
      </div>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("flex flex-col gap-2.5", className)}>
      <span className="text-ivory/70 text-[0.7rem] font-medium tracking-[0.24em] uppercase">
        {label}
      </span>
      {children}
      {error && (
        <span className="text-xs font-light text-red-400">{error}</span>
      )}
    </label>
  );
}

const darkFieldClass =
  "border-ivory/25 placeholder:text-ivory/30 focus:border-champagne";

function TextField({
  value,
  onChange,
  placeholder,
  inputMode,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  inputMode?: "tel" | "email" | "text";
}) {
  return (
    <input
      type="text"
      inputMode={inputMode}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className={cn(
        "text-ivory h-12 w-full border-b bg-transparent px-1 text-sm font-light transition-colors focus:outline-none",
        darkFieldClass
      )}
    />
  );
}

function TextareaField({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <textarea
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      rows={3}
      className={cn(
        "text-ivory w-full resize-none border-b bg-transparent px-1 py-2 text-sm font-light transition-colors focus:outline-none",
        darkFieldClass
      )}
    />
  );
}

function SelectField({
  value,
  onChange,
  placeholder,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "h-12 w-full cursor-pointer appearance-none border-b bg-transparent px-1 text-sm font-light transition-colors focus:outline-none",
          value ? "text-ivory" : "text-ivory/40",
          darkFieldClass,
          "[&>option]:bg-charcoal [&>option]:text-ivory"
        )}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDownIcon />
    </div>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="text-champagne/70 pointer-events-none absolute top-1/2 right-1 size-4 -translate-y-1/2"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
