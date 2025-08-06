import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';

const AddToCalendar = ({ event }) => {
  const { title, description, location, startTime, endTime } = event;

  const formatForGoogle = (date) => format(date, "yyyyMMdd'T'HHmmss");
  const formatForIcs = (date) => format(date, "yyyyMMdd'T'HHmmss'Z'");

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formatForGoogle(startTime)}/${formatForGoogle(endTime)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;

  const outlookCalendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(title)}&startdt=${startTime.toISOString()}&enddt=${endTime.toISOString()}&body=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;

  const generateIcsFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Lotus Medical//WIOA Enrollment//EN
BEGIN:VEVENT
UID:${Date.now()}@lotusmedical.com
DTSTAMP:${formatForIcs(new Date())}
DTSTART:${formatForIcs(startTime)}
DTEND:${formatForIcs(endTime)}
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
END:VEVENT
END:VCALENDAR`;
    return `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`;
  };

  return (
    <div className="grid sm:grid-cols-3 gap-4 mt-8">
      <Button size="lg" asChild className="bg-cyan-400 text-slate-900 hover:bg-cyan-300">
        <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
          <Calendar className="mr-2 h-5 w-5" /> Google
        </a>
      </Button>
      <Button size="lg" asChild className="bg-cyan-400 text-slate-900 hover:bg-cyan-300">
        <a href={outlookCalendarUrl} target="_blank" rel="noopener noreferrer">
          <Calendar className="mr-2 h-5 w-5" /> Outlook
        </a>
      </Button>
      <Button size="lg" asChild className="bg-cyan-400 text-slate-900 hover:bg-cyan-300">
        <a href={generateIcsFile()} download="wioa-enrollment.ics">
          <Calendar className="mr-2 h-5 w-5" /> Apple
        </a>
      </Button>
    </div>
  );
};

export default AddToCalendar;