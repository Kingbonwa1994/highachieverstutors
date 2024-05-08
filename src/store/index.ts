import create from 'zustand';

interface SubjectStore {
  selectedSubject: string;
  selectedTopic: string;
  setSelectedSubject: (subject: string) => void;
  setSelectedTopic: (topic: string) => void;
}

export const useSubjectStore = create<SubjectStore>((set) => ({
  selectedSubject: '',
  selectedTopic: '',
  setSelectedSubject: (subject) => set({ selectedSubject: subject }),
  setSelectedTopic: (topic) => set({ selectedTopic: topic }),
}));
