How TO RUN THE APPLICATION
The users can run the application by drag and drop, this means users can hold on any of the widget cards with their screen-cursor or keyboard and drag it to another position within the React DnD effect.

CHALLENGES FACED

1. The first challenge I faced was Drag-and-Drop with CSS Grid Conflict:
Integrating @dnd-kit/sortable with a 12-column Tailwind CSS grid caused layout instability during drag operations while developing.
  Why It Happened:
Transform-based drag animations conflicted with col-span grid dehavior.
  Solution:
I refactored the layout to use a true responsive grid(grid-ccols-1 lg:grid-cols-2) insteady of relying on col-span
  Impact:
I achieved a stable, predictable drag behavior without breaking responsiveness.

2. Matching Visual Hierarchy from Static Design
  Challenge:
Translating a static design image into a scalable component-based layout while maintaining spacing, alignment, and visual balance.
  Solution:
Used Tailwind utility classes strategically and ensured layout consistency through grid and flexbox structures.

3. Responsive Behavior with Sidebar Constraint
   Challenge:
Maintaining correct layout proportions when a persistent sidebar reduces available viewport width.
   Solution:
Structured content in logical grid layers instead of relying on absolute widths.







