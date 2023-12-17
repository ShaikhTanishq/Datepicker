import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-daterangepicker',
  templateUrl: './daterangepicker.component.html',
  styleUrls: ['./daterangepicker.component.scss'],
})
export class DaterangepickerComponent implements OnInit {
  // Disable previous dates
  minDate = new Date();

  // Array of holiday with day, date, and category
  holidaylist = [
    {
      day: 'Republic Day',
      date: this.formatDate('01/26/2023'),
      category: 'A',
    },
    {
      day: 'Chandramana Ugadi',
      date: this.formatDate('03/22/2023'),
      category: 'B',
    },
    {
      day: 'Good Friday',
      date: this.formatDate('04/07/2023'),
      category: 'C',
    },
    {
      day: 'Ramzan',
      date: this.formatDate('04/22/2023'),
      category: 'A',
    },
    {
      day: 'May Day',
      date: this.formatDate('05/01/2023'),
      category: 'B',
    },
    {
      day: 'Bakrid',
      date: this.formatDate('06/29/2023'),
      category: 'C',
    },
    {
      day: 'Independence Day',
      date: this.formatDate('08/15/2023'),
      category: 'A',
    },
    {
      day: 'Varamahalakshmi Vrata',
      date: this.formatDate('08/25/2023'),
      category: 'B',
    },
    {
      day: 'Ganesh Chaturthi',
      date: this.formatDate('09/19/2023'),
      category: 'C',
    },
    {
      day: 'Gandhi Jayanti',
      date: this.formatDate('10/02/2023'),
      category: 'A',
    },
    {
      day: 'Maha Navami/Ayudha Pooja',
      date: this.formatDate('10/23/2023'),
      category: 'B',
    },
    {
      day: 'Vijaya Dashami',
      date: this.formatDate('10/24/2023'),
      category: 'C',
    },
    {
      day: 'Kannada Rajyothsava',
      date: this.formatDate('11/01/2023'),
      category: 'A',
    },
    {
      day: 'Diwali',
      date: this.formatDate('11/13/2023'),
      category: 'B',
    },
    {
      day: 'Balipadyami',
      date: this.formatDate('11/14/2023'),
      category: 'C',
    },
    {
      day: 'Christmas Day',
      date: this.formatDate('12/25/2023'),
      category: 'A',
    },
  ];

  selectedStartDate: Date | null = null;
  selectedEndDate: Date | null = null;
  holidaysInSelectedRange: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  onDateRangeSelected(): void {
    this.findHolidaysInSelectedRange();
  }

  // Filter holidays that fall within the selected range
  public findHolidaysInSelectedRange(): void {
    this.holidaysInSelectedRange = this.holidaylist.filter((holiday) => {
      const holidayDate = new Date(this.formatDate(holiday.date));
      const isInRange = this.isDateInRange(
        holidayDate,
        this.selectedStartDate,
        this.selectedEndDate
      );

      return isInRange;
    });
  }

  //Check if date is in range
  public isDateInRange(
    date: Date,
    startDate: Date | null,
    endDate: Date | null
  ): boolean {
    if (!startDate || !endDate) {
      return false;
    }
    return date >= startDate && date <= endDate;
  }

  // Convert a date format to (MM/DD/YYYY)
  public formatDate(originalDate: string): string {
    const dateParts = originalDate.split('/');
    const formattedDate = new Date(
      +dateParts[2],
      +dateParts[0] - 1,
      +dateParts[1]
    );

    //design date string in the format 'MM/DD/YYYY'
    return formattedDate.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
  }

  //bgcolor for specific category item
  getHolidayClass(category: string): string {
    switch (category) {
      case 'A':
        return 'holiday-a';
      case 'B':
        return 'holiday-b';
      case 'C':
        return 'holiday-c';
      default:
        return 'holiday-transparent';
    }
  }
}
