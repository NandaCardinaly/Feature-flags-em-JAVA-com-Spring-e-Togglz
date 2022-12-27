package com.example.demo.model;

import org.togglz.core.Feature;
import org.togglz.core.context.FeatureContext;

public enum Features implements Feature{

    NEW_USUARIO_SERVICE_LISTAR,
    NEW_INDEX;

    public boolean isActive() {
        return FeatureContext.getFeatureManager().isActive(this);
    }
}