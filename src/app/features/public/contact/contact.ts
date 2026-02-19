import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { Button } from 'primeng/button';
@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, FloatLabel, InputText, Textarea, Button],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactForm: FormGroup;
  isSubmitting = signal(false);
  submitSuccess = signal(false);
  submitError = signal(false);
  private fb = inject(FormBuilder);

  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sergio-s%C3%A1nchez-carrasco-1a696b336/',
      icon: 'pi-linkedin',
      color: '#0077B5',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/WalterDeRacagua',
      icon: 'pi-github',
      color: '#333',
    },
    {
      name: 'Email',
      url: 'mailto:sergiosanchezcarrascoempresa@gmail.com',
      icon: 'pi-envelope',
      color: '#EA4335',
    },
  ];

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    if (field?.hasError('email')) {
      return 'Email inválido';
    }
    if (field?.hasError('minlength')) {
      const minLength = field.errors?.['minlength'].requiredLength;
      return `Mínimo ${minLength} caracteres`;
    }
    return '';
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.isSubmitting.set(true);
    this.submitSuccess.set(false);
    this.submitError.set(false);

    try {
      // Simular envío (aquí irá la llamada al backend)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.warn('Formulario enviado:', this.contactForm.value);

      this.submitSuccess.set(true);
      this.contactForm.reset();

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => this.submitSuccess.set(false), 5000);
    } catch (error) {
      console.error('Error al enviar:', error);
      this.submitError.set(true);
      setTimeout(() => this.submitError.set(false), 5000);
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
