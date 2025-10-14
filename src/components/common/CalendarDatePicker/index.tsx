// src/components/common/CalendarDatePicker/index.tsx

import styles from "./styles.module.css";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface CalendarDatePickerProps {
  selectedDate: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
}

export default function CalendarDatePicker({
  selectedDate,
  onDateChange,
}: CalendarDatePickerProps) {
  return (
    <div className={styles.calendarDatePicker}>
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={onDateChange}
        required
      />
    </div>
  );
}
