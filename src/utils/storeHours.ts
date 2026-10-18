/**
 * Store hours logic for Wizard Market
 * 346B Dundas St W, Lower Level, Toronto, ON
 * Hours: Wednesday, Friday, Saturday: 12:00 PM - 6:00 PM
 */

export interface StoreStatus {
  isOpen: boolean;
  statusText: string;
  detailText: string;
  nextOpenDayText: string;
}

// 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
export const OPEN_DAYS = [3, 5, 6]; // Wed, Fri, Sat
export const OPEN_HOUR = 12; // 12:00 PM
export const CLOSE_HOUR = 18; // 6:00 PM

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function calculateStoreStatus(now: Date): StoreStatus {
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentDecimalHour = hours + minutes / 60;

  const isTodayOpenDay = OPEN_DAYS.includes(day);

  if (isTodayOpenDay) {
    if (currentDecimalHour >= OPEN_HOUR && currentDecimalHour < CLOSE_HOUR) {
      return {
        isOpen: true,
        statusText: 'Open Now',
        detailText: 'Open until 6:00 PM today',
        nextOpenDayText: 'Closes today at 6:00 PM',
      };
    } else if (currentDecimalHour < OPEN_HOUR) {
      return {
        isOpen: false,
        statusText: 'Closed Now',
        detailText: 'Opens today at 12:00 PM',
        nextOpenDayText: 'Opens today at 12:00 PM',
      };
    }
  }

  // Find next open day
  let daysUntilNext = 1;
  while (daysUntilNext <= 7) {
    const nextDay = (day + daysUntilNext) % 7;
    if (OPEN_DAYS.includes(nextDay)) {
      const dayName = daysUntilNext === 1 ? 'Tomorrow' : DAY_NAMES[nextDay];
      return {
        isOpen: false,
        statusText: 'Closed Now',
        detailText: `Opens ${dayName} at 12:00 PM`,
        nextOpenDayText: `Opens ${dayName} at 12:00 PM`,
      };
    }
    daysUntilNext++;
  }

  return {
    isOpen: false,
    statusText: 'Closed Now',
    detailText: 'Opens Wednesday at 12:00 PM',
    nextOpenDayText: 'Opens Wednesday at 12:00 PM',
  };
}
