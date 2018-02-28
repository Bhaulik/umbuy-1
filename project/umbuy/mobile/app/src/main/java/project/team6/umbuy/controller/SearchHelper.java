package project.team6.umbuy.controller;

import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import java.util.ArrayList;
import java.util.List;

import project.team6.umbuy.R;
import project.team6.umbuy.model.Advertisement;

/**
 * Created by Murun on 2/28/2018.
 */

public class SearchHelper {
    private Button searchButton;
    private List<Advertisement> filteredList;
    private EditText searchText;

    public SearchHelper(Button searchButton,  EditText searchText){
        this.searchButton = searchButton;
        this.filteredList = new ArrayList<>();
        this.searchText = searchText;

    }

    public EditText getSearchText(){return this.searchText;}

    public void filterAds(String s, List<Advertisement> list, final AdsAdapter mAdapter ) {
        this.filteredList = new ArrayList<>();
        for (Advertisement advertisement: list){
            if(advertisement.getTitle().toLowerCase().contains(s.toLowerCase())){
                filteredList.add(advertisement);
            }
        }
        searchButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mAdapter.filterList((ArrayList<Advertisement>) filteredList);
            }
        });
    }


}