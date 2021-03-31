package com.example.clinic.initialTest;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "testCollection")
public class TestClass {
    private String keyInAtlas;

    public String getKeyInAtlas() {
        return keyInAtlas;
    }

    public void setKeyInAtlas(String keyInAtlas) {
        this.keyInAtlas = keyInAtlas;
    }
}
