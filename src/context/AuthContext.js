import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
  token: null,
};

// Action types
const AuthActionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_USER: 'SET_USER',
  SET_TOKEN: 'SET_TOKEN',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
};

// Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case AuthActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case AuthActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
      };

    case AuthActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case AuthActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case AuthActionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };

    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };

    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };

    case AuthActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };

    case AuthActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };

    case AuthActionTypes.UPDATE_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

// Create context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for existing token on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('sourcecloud-token');
        if (token) {
          // Here you would typically validate the token with your backend
          // For now, we'll just set it
          dispatch({ type: AuthActionTypes.SET_TOKEN, payload: token });
          
          // Mock user data - replace with actual API call
          const user = {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            role: 'user',
            avatar: null,
          };
          
          dispatch({ type: AuthActionTypes.SET_USER, payload: user });
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('sourcecloud-token');
      } finally {
        dispatch({ type: AuthActionTypes.SET_LOADING, payload: false });
      }
    };

    checkAuth();
  }, []);

  // Actions
  const actions = {
    setLoading: (isLoading) => {
      dispatch({ type: AuthActionTypes.SET_LOADING, payload: isLoading });
    },

    setUser: (user) => {
      dispatch({ type: AuthActionTypes.SET_USER, payload: user });
    },

    setToken: (token) => {
      dispatch({ type: AuthActionTypes.SET_TOKEN, payload: token });
    },

    setError: (error) => {
      dispatch({ type: AuthActionTypes.SET_ERROR, payload: error });
    },

    clearError: () => {
      dispatch({ type: AuthActionTypes.CLEAR_ERROR });
    },

    login: async (credentials) => {
      try {
        dispatch({ type: AuthActionTypes.SET_LOADING, payload: true });
        
        // Mock API call - replace with actual authentication
        const response = await mockLoginAPI(credentials);
        
        const { user, token } = response;
        
        // Store token in localStorage
        localStorage.setItem('sourcecloud-token', token);
        
        dispatch({
          type: AuthActionTypes.LOGIN_SUCCESS,
          payload: { user, token },
        });
        
        return { success: true };
      } catch (error) {
        dispatch({
          type: AuthActionTypes.LOGIN_FAILURE,
          payload: error.message,
        });
        return { success: false, error: error.message };
      }
    },

    register: async (userData) => {
      try {
        dispatch({ type: AuthActionTypes.SET_LOADING, payload: true });
        
        // Mock API call - replace with actual registration
        const response = await mockRegisterAPI(userData);
        
        const { user, token } = response;
        
        // Store token in localStorage
        localStorage.setItem('sourcecloud-token', token);
        
        dispatch({
          type: AuthActionTypes.REGISTER_SUCCESS,
          payload: { user, token },
        });
        
        return { success: true };
      } catch (error) {
        dispatch({
          type: AuthActionTypes.REGISTER_FAILURE,
          payload: error.message,
        });
        return { success: false, error: error.message };
      }
    },

    logout: () => {
      // Remove token from localStorage
      localStorage.removeItem('sourcecloud-token');
      
      dispatch({ type: AuthActionTypes.LOGOUT });
    },

    updateProfile: async (profileData) => {
      try {
        // Mock API call - replace with actual profile update
        const updatedUser = await mockUpdateProfileAPI(profileData);
        
        dispatch({
          type: AuthActionTypes.UPDATE_PROFILE,
          payload: updatedUser,
        });
        
        return { success: true };
      } catch (error) {
        dispatch({
          type: AuthActionTypes.SET_ERROR,
          payload: error.message,
        });
        return { success: false, error: error.message };
      }
    },

    // Utility functions
    isAuthenticated: () => {
      return state.isAuthenticated && !!state.token;
    },

    hasRole: (role) => {
      return state.user && state.user.role === role;
    },

    hasPermission: (permission) => {
      // Implement permission checking logic here
      return state.user && state.user.permissions?.includes(permission);
    },
  };

  const value = {
    state,
    actions,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Export action types for use in other files
export { AuthActionTypes };

// Mock API functions - replace with actual API calls
const mockLoginAPI = async (credentials) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock validation
  if (credentials.email === 'admin@sourcecloud.com' && credentials.password === 'password') {
    return {
      user: {
        id: 1,
        name: 'Admin User',
        email: 'admin@sourcecloud.com',
        role: 'admin',
        avatar: null,
        permissions: ['read', 'write', 'admin'],
      },
      token: 'mock-jwt-token-admin',
    };
  } else if (credentials.email === 'user@sourcecloud.com' && credentials.password === 'password') {
    return {
      user: {
        id: 2,
        name: 'Regular User',
        email: 'user@sourcecloud.com',
        role: 'user',
        avatar: null,
        permissions: ['read'],
      },
      token: 'mock-jwt-token-user',
    };
  } else {
    throw new Error('Invalid credentials');
  }
};

const mockRegisterAPI = async (userData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock registration
  return {
    user: {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      role: 'user',
      avatar: null,
      permissions: ['read'],
    },
    token: 'mock-jwt-token-new-user',
  };
};

const mockUpdateProfileAPI = async (profileData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock profile update
  return {
    ...profileData,
  };
};
