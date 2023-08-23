import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  private toastKey = "toast-k";
  constructor(private messageService: MessageService) {}

  showError(message: string) {
    this.messageService.add({
      key: this.toastKey,
      severity: "error",
      summary: "Error",
      detail: message,
    });
  }

  showDanger(message: string) {
    this.messageService.add({
      key: this.toastKey,
      severity: "danger",
      summary: "Avertissement",
      detail: message,
    });
  }

  showSuccess(message: string) {
    this.messageService.add({
      key: this.toastKey,
      severity: "success",
      summary: "Success",
      detail: message,
    });
  }
}
