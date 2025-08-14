import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  isLoading: false,
  error: null,
  notifications: [],
  modal: {
    isOpen: false,
    type: null,
    data: null,
  },
  user: null,
  theme: 'light',
  language: 'en',
  contactForm: {
    isSubmitting: false,
    submitted: false,
    error: null,
  },
  consultationForm: {
    isSubmitting: false,
    submitted: false,
    error: null,
  },
  jobApplication: {
    isSubmitting: false,
    submitted: false,
    error: null,
  },
};

// Action types
const ActionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_USER: 'SET_USER',
  SET_THEME: 'SET_THEME',
  SET_LANGUAGE: 'SET_LANGUAGE',
  SET_CONTACT_FORM_STATE: 'SET_CONTACT_FORM_STATE',
  SET_CONSULTATION_FORM_STATE: 'SET_CONSULTATION_FORM_STATE',
  SET_JOB_APPLICATION_STATE: 'SET_JOB_APPLICATION_STATE',
  RESET_FORM_STATES: 'RESET_FORM_STATES',
};

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    
    case ActionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    
    case ActionTypes.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    
    case ActionTypes.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          notification => notification.id !== action.payload
        ),
      };
    
    case ActionTypes.OPEN_MODAL:
      return {
        ...state,
        modal: {
          isOpen: true,
          type: action.payload.type,
          data: action.payload.data || null,
        },
      };
    
    case ActionTypes.CLOSE_MODAL:
      return {
        ...state,
        modal: {
          isOpen: false,
          type: null,
          data: null,
        },
      };
    
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    
    case ActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    
    case ActionTypes.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    
    case ActionTypes.SET_CONTACT_FORM_STATE:
      return {
        ...state,
        contactForm: {
          ...state.contactForm,
          ...action.payload,
        },
      };
    
    case ActionTypes.SET_CONSULTATION_FORM_STATE:
      return {
        ...state,
        consultationForm: {
          ...state.consultationForm,
          ...action.payload,
        },
      };
    
    case ActionTypes.SET_JOB_APPLICATION_STATE:
      return {
        ...state,
        jobApplication: {
          ...state.jobApplication,
          ...action.payload,
        },
      };
    
    case ActionTypes.RESET_FORM_STATES:
      return {
        ...state,
        contactForm: {
          isSubmitting: false,
          submitted: false,
          error: null,
        },
        consultationForm: {
          isSubmitting: false,
          submitted: false,
          error: null,
        },
        jobApplication: {
          isSubmitting: false,
          submitted: false,
          error: null,
        },
      };
    
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('sourcecloud-theme');
    if (savedTheme) {
      dispatch({ type: ActionTypes.SET_THEME, payload: savedTheme });
    }
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('sourcecloud-theme', state.theme);
    document.documentElement.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  // Auto-remove notifications after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (state.notifications.length > 0) {
        dispatch({
          type: ActionTypes.REMOVE_NOTIFICATION,
          payload: state.notifications[0].id,
        });
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [state.notifications]);

  // Actions
  const actions = {
    setLoading: (isLoading) => {
      dispatch({ type: ActionTypes.SET_LOADING, payload: isLoading });
    },

    setError: (error) => {
      dispatch({ type: ActionTypes.SET_ERROR, payload: error });
    },

    clearError: () => {
      dispatch({ type: ActionTypes.CLEAR_ERROR });
    },

    addNotification: (notification) => {
      const id = Date.now();
      dispatch({
        type: ActionTypes.ADD_NOTIFICATION,
        payload: { id, ...notification },
      });
    },

    removeNotification: (id) => {
      dispatch({ type: ActionTypes.REMOVE_NOTIFICATION, payload: id });
    },

    openModal: (type, data = null) => {
      dispatch({ type: ActionTypes.OPEN_MODAL, payload: { type, data } });
    },

    closeModal: () => {
      dispatch({ type: ActionTypes.CLOSE_MODAL });
    },

    setUser: (user) => {
      dispatch({ type: ActionTypes.SET_USER, payload: user });
    },

    setTheme: (theme) => {
      dispatch({ type: ActionTypes.SET_THEME, payload: theme });
    },

    setLanguage: (language) => {
      dispatch({ type: ActionTypes.SET_LANGUAGE, payload: language });
    },

    setContactFormState: (formState) => {
      dispatch({
        type: ActionTypes.SET_CONTACT_FORM_STATE,
        payload: formState,
      });
    },

    setConsultationFormState: (formState) => {
      dispatch({
        type: ActionTypes.SET_CONSULTATION_FORM_STATE,
        payload: formState,
      });
    },

    setJobApplicationState: (formState) => {
      dispatch({
        type: ActionTypes.SET_JOB_APPLICATION_STATE,
        payload: formState,
      });
    },

    resetFormStates: () => {
      dispatch({ type: ActionTypes.RESET_FORM_STATES });
    },

    // Utility functions
    showSuccess: (message) => {
      actions.addNotification({
        type: 'success',
        message,
      });
    },

    showError: (message) => {
      actions.addNotification({
        type: 'error',
        message,
      });
    },

    showInfo: (message) => {
      actions.addNotification({
        type: 'info',
        message,
      });
    },

    showWarning: (message) => {
      actions.addNotification({
        type: 'warning',
        message,
      });
    },
  };

  const value = {
    state,
    actions,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the app context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

// Export action types for use in other files
export { ActionTypes };